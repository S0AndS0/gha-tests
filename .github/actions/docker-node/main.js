const path = require('path');

console.log(`path.sep -> ${path.sep}`);

console.log('--- process.env ---');
console.table(process.env)
console.log('------');

console.log('--- process.argv ---');
console.table(process.argv)
console.log('------');
