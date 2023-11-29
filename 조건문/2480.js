let input = require('fs').readFileSync('input.txt').toString().split(' ')
let [num1, num2, num3] = input.map(Number)

if (num1==num2 && num2==num3) {
  console.log(10000 + num1*1000);
} else if (num1==num2) {
  console.log(1000 + num1*100);
} else if (num1==num3) {
  console.log(1000 + num1*100);
} else if (num2==num3) {
  console.log(1000 + num2*100);
} else {
  if (num1>num2) {
    if (num1>num3) {
      console.log(num1*100);
    } else {
      console.log(num3*100);
    }
  } else {
    if (num2>num3) {
      console.log(num2*100);
    } else {
      console.log(num3*100);
    }
  }
}

