import React from 'react';
import { Loading, Error } from '../Default';
import { MoviesListStyles } from './MoviesListStyles';
import MovieItem from '../MoviesItem/MoviesItem'

const MoviesList = ({loading, movies, error}) => {
  if(loading) return <Loading />
  if(error) return <Error message={error}/>
  
  return (
    <MoviesListStyles>
      {movies.map(movie => <MovieItem key={movie.rnum} item={movie} />)}
    </MoviesListStyles>
  );
};

export default MoviesList;