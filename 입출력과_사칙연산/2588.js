let f = require('fs');
let input = f.readFileSync('/dev/stdin').toString().split('\n');
let num1 = Number(input[0])
let num2 = input[1]
let num2_0 = Number(num2.split('')[0])
let num2_1 = Number(num2.split('')[1])
let num2_2 = Number(num2.split('')[2])

line3 = num1*num2_2 
line4 = num1*num2_1 
line5 = num1*num2_0 
line6 = line3 + line4*10 + line5*100

console.log(line3);
console.log(line4);
console.log(line5);
console.log(line6);