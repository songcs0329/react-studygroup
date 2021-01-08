import React, { useEffect } from 'react';
import { getMovies } from '../apis/apis';
import { useMoviesState, useMoviesDispatch, AsyncData } from '../hooks/MoviesProvider';
import MoviesList from './MoviesList';


const MoviesWrap = () => {
  const state = useMoviesState()
  const dispatch = useMoviesDispatch()

  useEffect(() => {
    AsyncData(dispatch, getMovies)
  }, [dispatch])

  const {loading, date, movies, error} = state

  return (
    <>
      <MoviesList
        loading={loading}
        movies={movies}
        error={error}
      />
    </>
  );
};

export default MoviesWrap;