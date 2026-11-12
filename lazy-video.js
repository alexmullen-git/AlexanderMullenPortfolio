/**
 * Lazy-loads and plays looping clips only while they're on screen.
 *
 *   <video data-src="clip.mp4" muted loop playsinline preload="none"></video>
 *       -> src is set when the clip nears the viewport.
 *   <video data-autoplay muted loop playsinline preload="none"><source ...></video>
 *       -> sources are fetched when the clip nears the viewport.
 *
 * Both play while visible and pause when scrolled away.
 */
(function () {
  var videos = document.querySelectorAll('video[data-src], video[data-autoplay]');
  if (!videos.length) return;

  function start(v) {
    if (!v.dataset.loaded) {
      v.dataset.loaded = '1';
      if (v.dataset.src) v.src = v.dataset.src;
      v.preload = 'auto';
      v.load();
    }
    v.muted = true;
    var p = v.play();
    if (p && typeof p.catch === 'function') p.catch(function () {});
  }

  if (!('IntersectionObserver' in window)) {
    videos.forEach(start);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) start(e.target);
      else if (e.target.dataset.loaded) e.target.pause();
    });
  }, { rootMargin: '300px 0px' });

  videos.forEach(function (v) { io.observe(v); });
})();
