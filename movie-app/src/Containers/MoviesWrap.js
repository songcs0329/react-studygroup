import React, { useState, useEffect } from 'react';
import { getMoviesDay, getMoviesWeek } from '../apis/movies';
import { useMoviesState, useMoviesDispatch, AsyncData } from '../hooks/MoviesProvider';
import MoviesList from '../Components/MoviesList/MoviesList';
import MoviesSearch from '../Components/MoviesSearch/MoviesSearch';


const MoviesWrap = () => {
  const state = useMoviesState()
  const dispatch = useMoviesDispatch()
  const [search, setSearch] = useState({
    options: 'daily',
    date: ""
  })
  
  const {loading, movies, error} = state
  const {options, date} = search

  useEffect(() => {
    if(movies.length < 1) {
      if(options === "daily") AsyncData(dispatch, getMoviesDay, date, options)
      if(options === "weekly") AsyncData(dispatch, getMoviesWeek, date, options)  
    }
    
  }, [dispatch, movies, date, options])

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(options === "daily") AsyncData(dispatch, getMoviesDay, date, options)
    if(options === "weekly") AsyncData(dispatch, getMoviesWeek, date, options)
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