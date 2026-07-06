import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1');
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }

  const filePath = path.normalize(path.join(root, pathname));
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath)] ?? 'application/octet-stream'
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(4173, '127.0.0.1', async () => {
  try {
    const [home, robots, sitemap] = await Promise.all([
      fetch('http://127.0.0.1:4173/'),
      fetch('http://127.0.0.1:4173/robots.txt'),
      fetch('http://127.0.0.1:4173/sitemap.xml')
    ]);
    const html = await home.text();
    console.log(
      JSON.stringify(
        {
          home: home.status,
          robots: robots.status,
          sitemap: sitemap.status,
          hasNextAssets: html.includes('/_next/static/'),
          hasJsonLd: html.includes('application/ld+json')
        },
        null,
        2
      )
    );
  } finally {
    server.close();
  }
});
