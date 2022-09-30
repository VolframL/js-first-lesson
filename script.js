'use strict';

let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < personalMovieDB.count; i++) {
      let name = prompt('Один из последних просмотренных фильмов?', '').trim(),
        score = prompt('На сколько оцените его?', '').trim();
      if (score != null && score != '' && score.length < 50 && name != null && name != '' && name.length < 50) {
        personalMovieDB.movies[name] = score;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр фильмов под номером ${i + 1}`);
      if (genre == '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их совсем');
        i--;
      } else {
        personalMovieDB.genres[i] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр# ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

// console.log(personalMovieDB);

// rememberMyFilms();

// detectPersonalLevel();

// writeYourGenres();

// showMyDB(personalMovieDB.privat);
