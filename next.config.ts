import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
  || process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\//, "")
  || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "media.giphy.com" },
    ],
  },
  basePath: isGithubPages && repoName ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : undefined,
};

export default nextConfig;


