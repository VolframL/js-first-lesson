let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  const name = prompt('Один из последних просмотренных фильмов?', ''),
    score = prompt('На сколько оцените его?', '');
  personalMovieDB.movies[name] = score;
}

console.log(personalMovieDB.movies);
