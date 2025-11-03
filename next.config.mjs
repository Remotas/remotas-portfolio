import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm] },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  pageExtensions: ["ts", "tsx", "mdx"],
  // Para GitHub Pages (opcional):
  // output: "export",
  // images: { unoptimized: true },
  // basePath: process.env.NEXT_BASE_PATH || "",
  // assetPrefix: process.env.NEXT_ASSET_PREFIX || ""
};

export default withMDX(nextConfig);
