import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const trap = String(body.company_url ?? "");

  console.log("[contact] received:", { name, email, hasTrap: !!trap });

  // Bots fill the hidden field. Pretend success and save nothing.
  if (trap) {
    console.log("[contact] spam trap triggered, message NOT saved");
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!message || message.length > 3000) {
    return NextResponse.json({ error: "Please enter a message (max 3000 characters)." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("[contact] missing Supabase environment variables");
    return NextResponse.json({ error: "Server is not configured." }, { status: 500 });
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase
    .from("messages")
    .insert({ name, email, message })
    .select();

  if (error) {
    console.error("[contact] Supabase insert failed:", error.message);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }

  console.log("[contact] saved to Supabase:", data);
  return NextResponse.json({ ok: true });
}