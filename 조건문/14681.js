let input = fs.readFileSync("/dev/stdin").toString().split('\n')
let x = Number(input[0])
let y = Number(input[1])

if(x>0){
  if(y>0){
    console.log("1");
  }else{
    console.log("4");
  }
}else{
  if(y>0){
    console.log("2");
  }else{
    console.log("3");
  }
}

// https://tesseractjh.tistory.com/39
// https://ant-hill.tistory.com/100