// app/sitemap.xml/route.ts
export async function GET() {
    const baseUrl = "https://krishnazade.vercel.app"; // change this to your domain
  
    const staticPages = [
      "", 
      "/projects",
      "/skills",
    ];
  
    const body = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((path) => {
            return `
              <url>
                <loc>${baseUrl}${path}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
              </url>
            `;
          })
          .join("")}
      </urlset>`;
  
    return new Response(body, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  