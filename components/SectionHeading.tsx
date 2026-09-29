import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
