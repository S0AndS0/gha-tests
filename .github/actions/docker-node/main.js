const path = require('path');

console.log(`path.sep -> ${path.sep}`);

console.log('--- process.env ---');
console.table(process.env)
console.log('------');

console.log('--- process.argv ---');
console.table(process.argv)
console.log('------');


console.log(`process.env.INPUT_SASS_SOURCE -> ${process.env.INPUT_SASS_SOURCE}`);
console.log(`process.env.INPUT_SASS_DESTINATION -> ${process.env.INPUT_SASS_DESTINATION}`);

const sass_source = process.env.INPUT_SASS_SOURCE;
const sass_destination = process.env.INPUT_SASS_DESTINATION;

console.log(`sass_source -> ${sass_source}`);
console.log(`sass_destination -> ${sass_destination}`);

const sass = require('sass');
