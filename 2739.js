let input = require('fs').readFileSync('input.txt').toString()
let num = Number(input)
for(let i=1; i<10; i++){
  console.log(`${num} * ${i} = ${num*i}`);
}