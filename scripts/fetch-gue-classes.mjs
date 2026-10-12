// Snapshot of GUE classes in Cala Gonone -> src/lib/data/gueClasses.json (fallback when the live endpoint is unavailable).
// Never fails the build: on any error the previous snapshot is kept.
import { writeFileSync } from 'node:fs';
import { parseGueClasses } from '../src/lib/utils/gueClasses.js';

try {
  const res = await fetch('https://www.gue.com/diver-training/gue-class-schedule', { headers: { 'User-Agent': 'BaseOne-build/1.0' } });
  if (!res.ok) throw new Error(`GUE responded ${res.status}`);
  const classes = parseGueClasses(await res.text());
  if (!classes.length) throw new Error('no Cala Gonone classes parsed');
  writeFileSync(new URL('../src/lib/data/gueClasses.json', import.meta.url), JSON.stringify(classes, null, 1) + '\n');
  console.log(`GUE snapshot: ${classes.length} classes`);
} catch (e) {
  console.warn(`GUE snapshot skipped: ${e.message}`);
}
