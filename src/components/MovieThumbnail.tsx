import React from 'react';
import { Image } from 'react-bootstrap';


const MovieThumbnail: React.FC<MovieThumbnailProps> = ({ className, src }) => {
  return (
    <div className={"thumbnail-placeholder" + (` ${className}` || '')}>
      <Image className="thumbnail-placeholder-image" src={src} rounded fluid />
    </div>
  );
};

export interface MovieThumbnailProps {
  className?: string,
  src?: string,
}


export default MovieThumbnail;