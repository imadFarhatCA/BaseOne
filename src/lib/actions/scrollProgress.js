// Sets --p (0..1) on the node as it travels from the bottom of the viewport to its centre.
export function scrollProgress(node) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { node.style.setProperty('--p', 1); return; }
  let raf = 0;
  const update = () => {
    raf = 0;
    const r = node.getBoundingClientRect();
    const p = 1 - Math.min(1, Math.max(0, (r.top + r.height * 0.3 - innerHeight * 0.35) / (innerHeight * 0.55)));
    node.style.setProperty('--p', p.toFixed(3));
  };
  const onScroll = () => { raf ||= requestAnimationFrame(update); };
  update();
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  return { destroy: () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); } };
}
