import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["i.pinimg.com", "cdn.pixabay.com"],
  },
  // Optionally, add any other Next.js config below
};

export default withMDX()(nextConfig);
