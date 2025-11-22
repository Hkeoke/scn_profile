// app/sitemap.ts
import { menu_links } from "@/constants/menu";
import config from "@/lib/admin/config";
import { MetadataRoute } from "next";

const baseUrl = config.env.app.url;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = menu_links?.map((link) => ({
    url: [baseUrl, link?.href].join(""),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    baseUrl: baseUrl,
  }));

  // Rutas dinámicas de blog (ejemplo con API)
  /*  const blogPosts = await fetch(`${baseUrl}/api/posts`).then((res) =>
    res.json(),
  );
  const dynamicBlogRoutes = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  })); */

  // Rutas dinámicas de productos (ejemplo con CMS)
  /*  const products = await fetch(`${baseUrl}/api/products`).then((res) =>
    res.json(),
  );
  const dynamicProductRoutes = products.map((product: any) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(product.updated_at),
    changeFrequency: "weekly",
    priority: 0.7,
  })); */

  return staticRoutes;
}
