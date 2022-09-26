'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < numberOfFilms; i++) {
    let name = prompt('Один из последних просмотренных фильмов?', '').trim(),
      score = prompt('На сколько оцените его?', '').trim();
    if (score != null && score != '' && score.length < 50 && name != null && name != '' && name.length < 50) {
      personalMovieDB.movies[name] = score;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр фильмов под номером ${i + 1}`);
  }
}
