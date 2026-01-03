// C:\Users\melqu\remotas-portfolio\next.config.mjs

import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm] },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  webpack: (config) => {
    // Permitir importar archivos .yml / .yaml
    config.module.rules.push({
      test: /\.ya?ml$/i,
      use: "js-yaml-loader",
    });
    return config;
  },
  // Si en algún momento vuelves a GitHub Pages:
  // output: "export",
  // images: { unoptimized: true },
  // basePath: process.env.NEXT_BASE_PATH || "",
  // assetPrefix: process.env.NEXT_ASSET_PREFIX || "",
};

export default withMDX(nextConfig);
