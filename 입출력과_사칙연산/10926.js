var f = require('fs');
var s = f.readFileSync('/dev/stdin').toString().trim();
console.log(s+'??!');