import type { NextConfig } from "next";

// GitHub Actions가 빌드할 때 GITHUB_REPOSITORY 환경변수에서
// "username/repo-name" 형태가 들어옵니다. 그 중 repo 이름을 자동으로 추출해
// basePath로 사용 → user/repo-name으로 자동 매칭됩니다.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.endsWith(".github.io"); // username.github.io 형태인지
const basePath = isUserSite || !repoName ? "" : `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true, // GitHub Pages에서 URL 경로 호환성 향상
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화 서버가 없음
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
