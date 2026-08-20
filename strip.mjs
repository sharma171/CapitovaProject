import fs from 'fs';
import { globSync } from 'glob';
import stripComments from 'strip-comments';

const files = globSync('src/**/*.{ts,tsx}', { nodir: true });

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Strip block comments (/**/) and line comments (//)
  // Keep JSX comments `{/* */}`? Actually stripComments might leave empty `{}`.
  // We'll use stripComments and see how it formats.
  const stripped = stripComments(content);
  
  // Also remove `{}` if they are now empty from stripped JSX comments.
  const cleaned = stripped.replace(/\{\s*\}/g, '');
  
  fs.writeFileSync(file, cleaned, 'utf8');
  console.log(`Stripped comments from ${file}`);
});
