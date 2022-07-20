const assets = [
  "/",
  "js/app.js",
  "js/sw-register.js",
  "css/fonts.css",
  "css/reset.css",
  "css/style.css",
];

const handleCacheData = () => {
  caches.open("assets").then(function (cache) {
    cache.addAll(assets);
  });
};
self.addEventListener("install", handleCacheData);
