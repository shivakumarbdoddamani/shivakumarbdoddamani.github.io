import { writeFileSync } from "fs";
import { resolve } from "path";
import { createSitemap } from "sitemap";

const sitemapUrls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  // Add more URLs dynamically if needed
];

const sm = createSitemap({
  hostname: "https://www.example.com",
  urls: sitemapUrls,
});

writeFileSync(resolve(__dirname, "public/sitemap.xml"), sm.toString());
