/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // ✅ 静态导出模式
    distDir: "out",
    images: { unoptimized: true }  // ✅ 关闭 next/image
  };
  
  module.exports = nextConfig;  // ✅ CommonJS 语法
  