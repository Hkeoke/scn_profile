import config from '@/lib/admin/config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/' // Recomendable bloquear endpoints API
        ]
      }
    ],
    sitemap: `${config.env.app.url}/sitemap.xml`
  };
}
