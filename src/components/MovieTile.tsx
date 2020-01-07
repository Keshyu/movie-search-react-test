import React from "react";
import MovieTitle from "./MovieTitle";
import Movie from "../dto/Movie";
import MovieThumbnail from "./MovieThumbnail";


const MovieTile: React.FC<MovieTileProps> = ({ movie }) => (
  <div>
    <MovieThumbnail className="mb-2" src={movie.imageUrl} />
    <MovieTitle>{movie.name}</MovieTitle>
  </div>
);

export interface MovieTileProps {
  movie: Movie,
}

export default MovieTile;