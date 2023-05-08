/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["jsx", "js", "tsx", "ts"], // This line is optional and tells Next.js which file extensions to look for in the pages directory
  // Set the page directory to src/pages
  pagesDir: "src/pages",
};

module.exports = nextConfig;
