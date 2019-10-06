const fs = require('fs');
const path = require('path');
const sass = require('sass');

const repository_path = path.join('.', path.sep);

const sass_source = path.join(repository_path, process.env.INPUT_SASS_SOURCE)

const sass_destination = path.join(repository_path, process.env.INPUT_SASS_DESTINATION)


console.log(`repository_path -> ${repository_path}`);
console.log(`sass_source -> ${sass_source}`);
console.log(`sass_destination -> ${sass_destination}`);

const sass_result = sass.renderSync({
  file: sass_source
});

fs.writeFile(sass_destination, sass_result.css, (err) => {
  if (!err) console.log(`Wrote file -> ${sass_destination}`);
});
