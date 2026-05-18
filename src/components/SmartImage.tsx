"use client";

import { useState } from "react";

// GitHub Pages 하위 경로 배포 시 자동으로 basePath prepend
// (예: /images/foo.jpg → /dental_homepage/images/foo.jpg)
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

function resolveSrc(src: string) {
  // 절대 URL (http://, https://, //)이면 그대로 사용
  if (/^([a-z]+:)?\/\//i.test(src)) return src;
  // 절대 경로 (/로 시작)면 basePath prepend
  if (src.startsWith("/")) return `${BASE_PATH}${src}`;
  // 상대 경로는 그대로
  return src;
}

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
};

export default function SmartImage({ src, alt, className, fallback }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolveSrc(src)}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
