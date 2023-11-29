let input = require('fs').readFileSync('input.txt').toString().split('\n')
let now = input[0].split(' ')
let hour = Number(now[0])
let min = Number(now[1])
let cost = Number(input[1])

if (min+cost>=60){
  hour += Math.floor((min+cost)/60)
  min = (min+cost)%60
  if (hour>=24){
    hour %= 24
  }
}else{
  min += cost
}

console.log(hour,min);

// https://chancoding.tistory.com/237