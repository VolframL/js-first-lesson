// Место для первой задачи
function calculateVolumeAndArea(num) {
  if (typeof num === 'number' && Number.isInteger(num) && num > 0) {
    let v = Math.pow(num, 3);
    let s = 6 * (num * num);
    let str = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
    return str;
  } else {
    return 'При вычислении произошла ошибка';
  }
}

// Место для второй задачи
function getCoupeNumber(num) {
  if (typeof num === 'number' && Number.isInteger(num) && num >= 0) {
    let str = 'Таких мест в вагоне не существует';
    if (num <= 36) {
      if (num >= 1 && num <= 4) {
        return 1;
      }
      if (num >= 5 && num <= 8) {
        return 2;
      }
      if (num >= 9 && num <= 12) {
        return 3;
      }
      if (num >= 13 && num <= 16) {
        return 4;
      }
      if (num >= 17 && num <= 20) {
        return 5;
      }
      if (num >= 21 && num <= 24) {
        return 6;
      }
      if (num >= 25 && num <= 28) {
        return 7;
      }
      if (num >= 29 && num <= 32) {
        return 8;
      }
      if (num >= 33 && num <= 36) {
        return 9;
      }
    }
    return str;
  } else {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }
}

function getTimeFromMinutes(minute) {
  if (Number.isInteger(minute) && minute >= 0) {
    let hours = parseInt(minute / 60);
    let min = parseInt((minute / 60 - hours) * 60);
    let str;
    if (hours === 1) {
      str = `Это ${hours} час и ${min} минут`;
    } else if (hours > 1 && hours < 5) {
      str = `Это ${hours} часа и ${min} минут`;
    } else {
      str = `Это ${hours} часов и ${min} минут`;
    }

    return str;
  }
  return 'Ошибка, проверьте данные';
}

console.log(getTimeFromMinutes(500)); //=> "Ошибка, проверьте данные"

function findMaxNumber(a, b, c, d) {
  let max = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === undefined || typeof arguments[i] !== 'number' || arguments.length < 4) {
      return 0;
    } else {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
  }
  return max;
}

console.log(findMaxNumber(1, 5, 6.6, 11)); // =>  11
console.log(findMaxNumber(1, 5, 41, 10)); //  =>  41
console.log(findMaxNumber(1, 5)); //  =>  0

function fib(num) {
  if (Number.isInteger(num)) {
    let str = '';
    let arr = [0, 1];
    for (let i = 0; i < num; i++) {
      arr.push(arr[i] + arr[i + 1]);
      str += arr[i];
      str += ' ';
    }
    return str.trim();
  } else {
    return '';
  }
}

console.log(fib(5));
