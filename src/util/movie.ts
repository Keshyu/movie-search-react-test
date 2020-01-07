import Movie from "../dto/Movie";

export function sortMoviesAlphabetically(movies: Movie[]) {
  return movies.sort(compareMovies);
}

export function compareMovies(a: Movie, b: Movie) {
  return a.name.localeCompare(b.name);
}