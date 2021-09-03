const fs = require('fs');
const sourceMapsFiles = fs.readdirSync('./dist/netlify-first-app');
sourceMapsFiles.filter(
  name => /.*\.map/.test(name)
).forEach(
  sourceMap => fs.unlinkSync(`./dist/netlify-first-app/${sourceMap}`)
);
