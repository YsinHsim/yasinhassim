import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const outFile = join(rootDir, 'CHANGELOG.md');

const log = execFileSync(
  'git',
  ['log', '--pretty=format:%ad|%h|%s', '--date=format:%Y-%m-%d'],
  { cwd: rootDir, encoding: 'utf-8' }
).trim();

const commits = log.split('\n').filter(Boolean).map((line) => {
  const [date, hash, ...subjectParts] = line.split('|');
  return { date, hash, subject: subjectParts.join('|') };
});

const byDate = new Map();
for (const commit of commits) {
  if (!byDate.has(commit.date)) byDate.set(commit.date, []);
  byDate.get(commit.date).push(commit);
}

const lines = ['# Changelog', '', 'Auto-generated from git history. Run `npm run changelog` to regenerate.', ''];

for (const [date, entries] of byDate) {
  lines.push(`## ${date}`, '');
  for (const { hash, subject } of entries) {
    lines.push(`- ${subject} (${hash})`);
  }
  lines.push('');
}

writeFileSync(outFile, lines.join('\n'));
console.log(`Wrote ${commits.length} commits to CHANGELOG.md`);
