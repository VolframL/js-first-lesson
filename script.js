'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  let name = prompt('Один из последних просмотренных фильмов?', ''),
    score = prompt('На сколько оцените его?', '');
  if (score != null && score != '' && score.length < 50 && name != null && name != '' && name.length < 50) {
    personalMovieDB.movies[name] = score;
  } else {
    i--;
  }
}

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}
console.log(personalMovieDB);

function foo() {
  console.log('object');
  let num = 40;
  return num;
}

console.log(foo());
