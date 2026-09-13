/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` so it can deploy to any static host
  // (Vercel, GitHub Pages, Netlify, S3, etc.) with no server runtime.
  output: 'export',
  images: {
    // next/image optimization needs a server; disable it for static export.
    unoptimized: true,
  },
  // Emit URLs as `/path/` so they resolve correctly on static hosts.
  trailingSlash: true,

  // --- GitHub Pages (project subpath) ---
  // If you deploy to https://<user>.github.io/<repo>/, uncomment and set the repo
  // name below so assets and links resolve under the subpath. Leave commented for
  // Vercel, Netlify, or a custom domain served from the root.
  // basePath: '/echo-landing-page',
  // assetPrefix: '/echo-landing-page/',
};

export default nextConfig;
