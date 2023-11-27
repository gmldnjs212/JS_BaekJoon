let f = require('fs');
let y = f.readFileSync('/dev/stdin').toString().trim();
let year = y-(2541-1998)
console.log(year);