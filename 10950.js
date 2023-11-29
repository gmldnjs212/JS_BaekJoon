let input = require('fs').readFileSync('input.txt').toString().split('\n')
let count = Number(input[0])
for(let i=1; i<=count; i++){
  let [num1, num2] = input[i].split(' ').map(Number)
  console.log(num1 + num2);
}