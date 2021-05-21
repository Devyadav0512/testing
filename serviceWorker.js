const tapatap = "tapatap"
const assets = [
  "/",
  "/index.html",
  "/assets/js/lib/howler.js",
  "/assets/js/lib/paper-full.js",
  "/assets/images/logo.png",
  "/sounds/bubbles.mp3",
  "/sounds/clay.mp3",
  "/sounds/confetti.mp3",
  "/sounds/corona.mp3",
  "/sounds/dotted-spiral.mp3",
  "/sounds/flash-1.mp3",
  "/sounds/flash-2.mp3",
  "/sounds/flash-3.mp3",
  "/sounds/glimmer.mp3",
  "/sounds/moon.mp3",
  "/sounds/pinwheel.mp3",
  "/sounds/piston-1.mp3",
  "/sounds/piston-2.mp3",
  "/sounds/prism-1.mp3",
  "/sounds/prism-2.mp3",
  "/sounds/prism-3.mp3",
  "/sounds/splits.mp3",
  "/sounds/squiggle.mp3",
  "/sounds/strike.mp3",
  "/sounds/suspension.mp3",
  "/sounds/timer.mp3",
  "/sounds/ufo.mp3",
  "/sounds/veil.mp3",
  "/sounds/wipe.mp3",
  "/sounds/zig-zag.mp3",
  "/sounds/moon.mp3"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(tapatap).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})