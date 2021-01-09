import React, { useEffect } from 'react';
import { getLatest, getMoviesDay, getMoviesWeek } from '../apis/movies';
import { useMoviesState, useMoviesDispatch, AsyncData, changeValue } from '../hooks/MoviesProvider';
import MoviesList from '../Components/MoviesList/MoviesList';
import MoviesSearch from '../Components/MoviesSearch/MoviesSearch';


const MoviesWrap = () => {
  const state = useMoviesState()
  const dispatch = useMoviesDispatch()
  const {loading, movies, error, options, date} = state

  const local = localStorage.setItem("movies", JSON.stringify(movies))
  useEffect(() => {
    // 첫 로드 시에만 실행
    if(!local) AsyncData(dispatch, getLatest(), "daily", getMoviesDay)
  }, [dispatch, local])

  const handleChange = e => {
    const {name, value} = e.target
    changeValue(dispatch, name, value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(options === "daily") AsyncData(dispatch, date, options, getMoviesDay)
    if(options === "weekly") AsyncData(dispatch, date, options, getMoviesWeek)
  }

  return (
    <>
      <MoviesSearch
        options={options}
        date={date}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <MoviesList
        loading={loading}
        movies={movies}
        error={error}
      />
    </>
  );
};

export default MoviesWrap;