// Plays a muted video only while it is mostly on screen.
export function inviewPlay(video) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) video.play().catch(() => {});
    else video.pause();
  }, { threshold: 0.5 });
  io.observe(video);
  return { destroy: () => io.disconnect() };
}
