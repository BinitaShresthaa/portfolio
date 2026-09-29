import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // TODO: update once you have a real deployed domain.
    sitemap: "shrestha-binita.com.np",
  };
}
