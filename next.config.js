const withPWA = require("@ducanh2912/next-pwa").default({
  extendDefaultRuntimeCaching: true,
  workboxOptions: { exclude: ["/some-js-files.js"] },
  customWorkerSrc: "service-worker",
  customWorkerDest: "somewhere-else",
  customWorkerPrefix: "not/a-worker",
  fallbacks: {
    document: "/~offline",
    data: "/fallback.json",
    image: "/fallback.webp",
    audio: "/fallback.mp3",
    video: "/fallback.mp4",
    font: "/fallback-font.woff2",
  },
});

module.exports = withPWA({
  images: {
    domains: ["i.ytimg.com"],
  },
});
