const assets = [
  "/",
  "assets/images/logo.svg",
  "assets/images/beef-salad.webp",
  "assets/images/green-salad.webp",
  "assets/images/nut-salad.webp",
  "assets/images/signIn.webp",
  "assets/images/tomato.webp",
  "assets/images/vegan.webp",
  "assets/icon-pack.svg",
  "assets/fonts/Roboto/Roboto-Light.ttf",
  "assets/fonts/Roboto/Roboto-Regular.ttf",
  "assets/fonts/Roboto/Roboto-Medium.ttf",
  "assets/favicon/favicon-32x32.png",
  "js/app.js",
  "js/sw-register.js",
  "css/fonts.css",
  "css/reset.css",
  "css/style.css",
];

const handleCacheData = (event) => {
  event.waitUntil(
    caches.open("assets").then(function (cache) {
      cache.addAll(assets);
    })
  );
};
const handleFetchCache = (event) => {
  event.respondWith(
    caches.match(event.request.url).then((response) => {
      if (response) {
        return response;
      } else {
        fetch(event.request.ur);
      }
    })
  );
};

self.addEventListener("install", handleCacheData);
self.addEventListener("fetch", handleFetchCache);
