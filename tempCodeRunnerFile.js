function fib(num) {
  if (Number.isInteger(num)) {
  let str = '';
  let arr = [0, 1];
  for (let i = 0; i < num; i++) {
    arr.push(arr[i] + arr[i + 1]);
    str += arr[i];
    if (i < num-1){
      str += ' ';
      }
    }
    return str;
  } else {
    return '';
  }

}

console.log(fib(5));
