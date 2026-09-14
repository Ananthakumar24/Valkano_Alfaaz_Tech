import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('./index.html');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // replace cyan with indigo
  let newContent = content.replace(/cyan-/g, 'indigo-');
  // replace rgba(6,182,212 with rgba(99, 102, 241
  newContent = newContent.replace(/6,182,212/g, '99,102,241');
  newContent = newContent.replace(/6,\s*182,\s*212/g, '99,102,241');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
