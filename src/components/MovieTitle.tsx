import React, { ReactElement } from 'react';


const MovieTitle: React.FC<MovieTitleProps> = ({ className, children }) => (
  <div className={className}>
    <h6 className="movie-title">{children}</h6>
    <div className="movie-genre">Drama</div>
  </div>
);

export interface MovieTitleProps {
  className?: string,
  children?: ReactElement | ReactElement[] | string,
}

export default MovieTitle;