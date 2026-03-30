self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("keyboard-press-visualizer_v1").then((cache) =>
            cache.addAll([
                "/keyboard-press-visualizer/",
                "/keyboard-press-visualizer/favicon.ico",
                "/keyboard-press-visualizer/index.html",
            ])
        )
    );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response ?? fetch(event.request)
    )
  );
});