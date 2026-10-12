// Parses the GUE class schedule page (server-rendered <table>) into calendar rows.
const decode = (s) => s
  .replace(/&uuml;/g, 'ü').replace(/&eacute;/g, 'é').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'")
  .replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/<[^>]+>/g, '').trim();

const LEVELS = [
  [/ccr|rebreather/i, 'CCR'], [/dpv/i, 'DPV'], [/cave|cavern/i, 'Cave'],
  [/fundamentals|performance|primer/i, 'Fundamentals'], [/technical|tech/i, 'Tech'],
];
const levelFor = (name) => (LEVELS.find(([re]) => re.test(name)) || [null, 'Course'])[1];

export function parseGueClasses(html, place = 'Cala Gonone') {
  const rows = [...html.matchAll(/<tr><td><a href="([^"]+)"[^>]*>(.*?)<\/a><\/td><td>(.*?)<\/td><td>(.*?)<\/td><td><a href="[^"]+">(.*?)<\/a><\/td><\/tr>/g)];
  return rows
    .map(([, path, course, date, location, instructor]) => ({
      course: decode(course), date: decode(date), location: decode(location), instructor: decode(instructor),
      gueUrl: new URL(path, 'https://www.gue.com').href
    }))
    .filter((r) => r.location.toLowerCase().includes(place.toLowerCase()))
    .map((r) => ({
      course: r.course.startsWith('GUE') ? r.course : `GUE ${r.course}`,
      date: r.date, instructor: r.instructor, org: 'GUE', level: levelFor(r.course), gueUrl: r.gueUrl,
      details: `Taught in ${r.location} by ${r.instructor}. Book directly on GUE.com.`
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}
