import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const CACHE_TTL = 60 * 60 * 6; // 6 hours
let cached = null;
let cachedAt = 0;

export async function GET() {
  const now = Date.now();

  if (cached && now - cachedAt < CACHE_TTL * 1000) {
    return json(cached, {
      headers: { 'Cache-Control': `public, max-age=${CACHE_TTL}` },
    });
  }

  const apiKey = env.GOOGLE_PLACES_API_KEY;
  const placeId = env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return json({ reviews: [] }, { status: 200 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}&reviews_sort=newest&language=en`;

  const res = await fetch(url);
  const data = await res.json();

  const raw = data?.result?.reviews ?? [];
  const reviews = raw
    .filter(r => r.rating >= 4)
    .slice(0, 6)
    .map(r => ({
      author: r.author_name,
      photo: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      time: r.relative_time_description,
    }));

  cached = { rating: data?.result?.rating ?? null, reviews };
  cachedAt = now;

  return json(cached, {
    headers: { 'Cache-Control': `public, max-age=${CACHE_TTL}` },
  });
}
