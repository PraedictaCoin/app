self.addEventListener('fetch', event => {
  // Basic offline fallback – cache essential assets
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
