import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import './App.sass';
import MovieList from '../components/MovieList';
import Movie from '../dto/Movie';


const MOVIES: Movie[] = [
  {
    name: "Iron Man",
    imageUrl: "http://static.tvgcdn.net/feed/1/567/thumbs/93267567_1000x1333.jpg",
  },
  {
    name: "Iron Man 2",
    imageUrl: "https://image.tmdb.org/t/p/original/5tCA3oZXLRPHmS5DIDnlu7hY4Ab.jpg",
  },
  {
    name: "Spiderman",
    imageUrl: "https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg",
  },
  {
    name: "Man of Steel",
    imageUrl: "http://4.bp.blogspot.com/-JVqRlFMuHQc/Uf4iZNFkmaI/AAAAAAAADOY/6uY99oYrdAo/s1600/man+of+steel+2013+movie.png",
  },
  {
    name: "Star Wars: The Rise Of Skywalker",
    imageUrl: "https://specials-images.forbesimg.com/imageserve/5d65b9f8fead2800089255b4/960x0.jpg?fit=scale",
  },
  {
    name: "Frozen II",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4f/Frozen_2_poster.jpg",
  },
  {
    name: "Frozen",
    imageUrl: "https://image.tmdb.org/t/p/original/xOVSMcqMeohzasmCIyLwUv0k7FJ.jpg",
  },
  {
    name: "Cats",
    imageUrl: "https://www.showbizjunkies.com/wp-content/uploads/2019/11/cats-movie-poster.jpg",
  },
  {
    name: "Maleficent: Mistress Of Evil",
    imageUrl: "https://insidepulse.com/wp-content/uploads/2019/05/Maleficent-Misteress-of-Evil-poster-Angelina-Jolie.jpg",
  },
]

const App: React.FC = () => (
  <Container fluid>
    <Navbar className="mb-4" bg="dark" variant="dark">
      <Navbar.Brand className="mx-auto text-uppercase">
        Movie Search
      </Navbar.Brand>
    </Navbar>

    <MovieList movies={MOVIES} />
  </Container>
);


export default App;
