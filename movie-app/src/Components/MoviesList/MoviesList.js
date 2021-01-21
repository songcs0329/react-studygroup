import React from 'react';
import { Loading, Error } from '../Default';
import { MoviesListStyles } from './MoviesListStyles';
import MovieItem from '../MoviesItem/MoviesItem';

const MoviesList = ({loading, movies, error}) => {
  if(loading) return <Loading />
  if(error) return <Error message={error}/>
  
  return (
    <MoviesListStyles>
      {
        movies.length < 1
        ?
        <li>검색결과가 없습니다.</li>
        :
        movies.map(movie => <MovieItem key={movie.rnum} item={movie}/>)
      }
    </MoviesListStyles>
  );
}

export default React.memo(MoviesList);