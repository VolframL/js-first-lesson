// // Место для первой задачи
// function calculateVolumeAndArea(num) {
//   if (typeof num === 'number' && Number.isInteger(num) && num > 0) {
//     let v = Math.pow(num, 3);
//     let s = 6 * (num * num);
//     let str = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
//     return str;
//   } else {
//     return 'При вычислении произошла ошибка';
//   }
// }

// // Место для второй задачи
// function getCoupeNumber(num) {
//   if (typeof num === 'number' && Number.isInteger(num) && num >= 0) {
//     let str = 'Таких мест в вагоне не существует';
//     if (num <= 36) {
//       if (num >= 1 && num <= 4) {
//         return 1;
//       }
//       if (num >= 5 && num <= 8) {
//         return 2;
//       }
//       if (num >= 9 && num <= 12) {
//         return 3;
//       }
//       if (num >= 13 && num <= 16) {
//         return 4;
//       }
//       if (num >= 17 && num <= 20) {
//         return 5;
//       }
//       if (num >= 21 && num <= 24) {
//         return 6;
//       }
//       if (num >= 25 && num <= 28) {
//         return 7;
//       }
//       if (num >= 29 && num <= 32) {
//         return 8;
//       }
//       if (num >= 33 && num <= 36) {
//         return 9;
//       }
//     }
//     return str;
//   } else {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   }
// }

// function getTimeFromMinutes(minute) {
//   if (Number.isInteger(minute) && minute >= 0) {
//     let hours = parseInt(minute / 60);
//     let min = parseInt((minute / 60 - hours) * 60);
//     let str;
//     if (hours === 1) {
//       str = `Это ${hours} час и ${min} минут`;
//     } else if (hours > 1 && hours < 5) {
//       str = `Это ${hours} часа и ${min} минут`;
//     } else {
//       str = `Это ${hours} часов и ${min} минут`;
//     }

//     return str;
//   }
//   return 'Ошибка, проверьте данные';
// }

// console.log(getTimeFromMinutes(500)); //=> "Ошибка, проверьте данные"

// function findMaxNumber(a, b, c, d) {
//   let max = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] === undefined || typeof arguments[i] !== 'number' || arguments.length < 4) {
//       return 0;
//     } else {
//       if (arguments[i] > max) {
//         max = arguments[i];
//       }
//     }
//   }
//   return max;
// }

// console.log(findMaxNumber(1, 5, 6.6, 11)); // =>  11
// console.log(findMaxNumber(1, 5, 41, 10)); //  =>  41
// console.log(findMaxNumber(1, 5)); //  =>  0

// function fib(num) {
//   if (Number.isInteger(num)) {
//     let str = '';
//     let arr = [0, 1];
//     for (let i = 0; i < num; i++) {
//       arr.push(arr[i] + arr[i + 1]);
//       str += arr[i];
//       str += ' ';
//     }
//     return str.trim();
//   } else {
//     return '';
//   }
// }

// console.log(fib(5));

// const personalPlanPeter = {
//   name: 'Peter',
//   age: '29',
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//     },
//     exp: '1 month',
//   },
//   showAgeAndLangs: (obj) => {
//     let str = `Мне ${obj.age} и я владею языками: `;
//     str += obj.skills.languages.join(' ').toUpperCase();
//     return str;
//   },
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//   let {exp} = plan.skills;
//   return exp;
// }

// function showProgrammingLangs(plan) {
//   let str = '';
//   for (const lang in plan.skills.programmingLangs) {
//     str += `Язык ${lang} изучен на ${plan.skills.programmingLangs[lang]}\n`;
//   }
//   return str;
// }
// console.log(showExperience(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   if (arr.length > 0) {
//     return `Семья состоит из: ${arr.join(' ')}`;
//   } else {
//     return 'Семья пуста';
//   }
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach((item) => {
//     console.log(item.toLowerCase());
//   });
// }

// standardizeStrings(favoriteCities);

// function reverse(str) {
//   let rev = '';
//   for (let i = str.length-1; i >= 0; i--) {
//     rev += str[i];
//   }
//   console.log(rev);
//   return rev;
// }

// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str === 'string') {
//     return str.split('').reverse().join('');
//   } else {
//     return 'Ошибка!';
//   }
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {

//   if (arr.length === 0) {
//     return 'Нет доступных валют.';
//   } else {
//     let money = [...baseCurrencies, ...additionalCurrencies];
//     let str = `Доступные валюты:\n`;
//     for (let item of money) {
//       if (item !== missingCurr) {
//         str += `${item}\n`;
//       }
//     }
//     return str;
//   }
// }
// console.log(availableCurr([], 'CNY'));
// console.log(availableCurr(money, 'CNY'));

//"Язык js изучен на 20% Язык php изучен на 10%"
// personalPlanPeter.showAgeAndLangs(personalPlanPeter); //'Мне 29 и я владею языками: RU ENG'
// console.log(showProgrammingLangs(personalPlanPeter));

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort(compareNum);
// console.log(products.join(';'));

// function compareNum(a, b) {
//   return a - b;
// }

// let obj = {
//   a: 5,
//   b: 10,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// function copy(mainObj) {
//   let objCopy = {};

//   for (const key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const newNumbers = copy(obj);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(obj);

// let numbers = {
//   a: 5,
//   b: 10,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const add = {
//   d: 17,
//   e: 20
// };

// console.log(Object.assign([numbers], add));

// const clone = Object.assign({}, add);
// clone.d = 10;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray.slice();
// newArray.push('d');

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'gavno'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'fb', 'instagram'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// // log(...num);

// let newNum = [...num];
// newNum[0] = 0;
// console.log(newNum);
// console.log(num);

// const array = ['a', 'b'];
// const q = {
//   one: 1,
//   two: 2,
//   three: {
//     four: 4,
//     five: 5
//   }
// };

// const newQ = {...q};

// newQ.one = 'one';
// newQ.three.five = 'five';
// console.log(q);
// console.log(newQ);

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   let {shops, height, moneyPer1m3, budget} = data;
//   let area = 0;
//     for (const shop of shops) {
//       area += shop.width * shop.length;
//     }

//   let volume = area * height;

//   if (budget >= moneyPer1m3 * volume) {
//     return 'Бюджета достаточно';
//   } else {
//     return 'Бюджета недостаточно';
//   }
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Ann', 'Josh', 'zWsnssn', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//   let newArr = arr.map((item) => item.toLowerCase()).sort();
//   newArr = newArr.map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()));
//   let str = newArr.toString();
//   let array = [];
//   for (let i = 0; i < 3; i++) {
//     array[i] = new Array(3);
//     for (let j = 0; j < 3; j++) {
//       array[i][j] = newArr.shift();
//     }
//   }
//   if (newArr.length === 0) {
//     array.push('Оставшиеся студенты: -');
//   } else if (newArr.length === 1) {
//     array.push(`Оставшиеся студенты: ${newArr}`);
//   } else {
//     array.push(`Оставшиеся студенты: ${newArr[0]}, ${newArr[1]}`);
//   }

//   return array;
// }

// console.log(sortStudentsByGroups(students));
