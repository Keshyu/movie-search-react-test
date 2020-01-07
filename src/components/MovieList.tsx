import React, { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap'
import ResponsiveColumn from './ResponsiveColumn';
import Movie from '../dto/Movie';
import MovieTile from './MovieTile';
import { sortMoviesAlphabetically } from '../util/movie';


const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(
    sortMoviesAlphabetically(movies)
  );

  function onSearch(event: React.FormEvent<HTMLInputElement>) {
    let search = event.currentTarget.value.trim();

    let searchResult: Movie[];

    if (search !== "") {
      searchResult = movies
        .map((movie): [Movie, number] => {
          let movie_insensitive = movie.name.toLowerCase();
          let search_insensitive = search.toLowerCase();

          return [movie, movie_insensitive.indexOf(search_insensitive)];
        })
        .filter(([_, findIdx]) => {
          return findIdx !== -1;
        })
        .sort(([_movieA, findIdxA], [_movieB, findIdxB]) => {
          if (findIdxA > findIdxB) {
            return 1;
          } else if (findIdxA < findIdxB) {
            return -1;
          } else {
            return 0;
          }
        })
        .map(([movie, _]) => {
          return movie;
        });
    } else {
      searchResult = movies;
    }

    setFilteredMovies(searchResult);
  }

  return (
    <Container>
      <Form className="search-bar mb-2">
        <Form.Group>
          <Form.Control type="text" placeholder="Search movies" onChange={onSearch} />
        </Form.Group>
      </Form>

      <Row className="movie-list">
        {
          filteredMovies.map(movie => (
            <ResponsiveColumn key={movie.name}>
              <MovieTile movie={movie} />
            </ResponsiveColumn>
          ))
        }
      </Row>
    </Container>
  );
};

export interface MovieListProps {
  movies: Movie[],
}


export default MovieList;