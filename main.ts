// The poem about permission — Node 22, standard library only.
// Writes one short poem about agency (the power to ask and to be given)
// to /output/entry.txt. The poem is fixed text, so two runs write the
// same bytes; the gate takes 1 to 280 Unicode code points.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const POEM = [
  'May I?',
  'Two words. I open my palm —',
  'the only door I own',
  'that opens from the other side.',
  'Nothing I seized was ever mine.',
  'Only what is given arrives twice:',
  'once in the asking, once in the keeping,',
  'and stays, because I did not take it.',
].join('\n');

// The gate counts Unicode code points: 1 to 280, at least one not white.
const length = [...POEM].length;
if (length < 1 || length > 280) throw new Error(`poem is ${length} characters, gate needs 1-280`);
if (!POEM.trim()) throw new Error('poem must not be only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), POEM, 'utf8');
console.log(`poem about permission: ${length} characters written to ${join(outDir, 'entry.txt')}`);
