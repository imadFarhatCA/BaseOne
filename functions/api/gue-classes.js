// Cloudflare Pages Function: live GUE classes in Nuoro / Cala Gonone, cached for 6 hours.
import { parseGueClasses } from '../../src/lib/utils/gueClasses.js';

const SOURCE = 'https://www.gue.com/diver-training/gue-class-schedule';

export async function onRequestGet({ request, waitUntil }) {
  const cache = caches.default;
  const hit = await cache.match(request);
  if (hit) return hit;

  const res = await fetch(SOURCE, { headers: { 'User-Agent': 'BaseOne-site/1.0' } });
  if (!res.ok) return Response.json({ classes: [] }, { status: 502 });

  const classes = parseGueClasses(await res.text());
  const out = Response.json({ classes, updated: new Date().toISOString() }, { headers: { 'Cache-Control': 'public, max-age=21600' } });
  waitUntil(cache.put(request, out.clone()));
  return out;
}
