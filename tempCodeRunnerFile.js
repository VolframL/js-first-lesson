const students = ['Peter', 'Ann', 'Josh', 'zWsnssn', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  let newArr = arr.map((item) => item.toLowerCase()).sort();
  newArr = newArr.map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()));
  let str = newArr.toString();
  let array = [];
  for (let i = 0; i < 3; i++) {
    array[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
      array[i][j] = newArr.shift();
    }
  }
  if (newArr.length === 0) {
    array.push('Оставшиеся студенты: -');
  } else if (newArr.length === 1) {
    array.push(`Оставшиеся студенты: ${newArr}`);
  } else {
    array.push(`Оставшиеся студенты: ${newArr[0]}, ${newArr[1]}`);
  }

  return array;
}

console.log(sortStudentsByGroups(students));