import React, { useEffect } from 'react';
import { getMoviesDay, getMoviesWeek } from '../apis/movies';
import { useMoviesState, useMoviesDispatch, AsyncData, changeValue } from '../hooks/MoviesProvider';
import MoviesList from '../Components/MoviesList/MoviesList';
import MoviesSearch from '../Components/MoviesSearch/MoviesSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MovieDetailWrap from './MovieDetailWrap';

const MoviesWrap = () => {
  const state = useMoviesState()
  const dispatch = useMoviesDispatch()
  const {loading, movies, error, options, date} = state

  useEffect(() => {
    AsyncData(dispatch, date, options, getMoviesDay)
    // eslint-disable-next-line
  }, [dispatch])

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
    <Router>
      <Switch>
        <Route path={`/`} exact={true}>
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
        </Route>
        <Route path={`/detail/:movieCd`}> 
          <MovieDetailWrap/>
        </Route>
      </Switch>
    </Router>
  );
};

export default MoviesWrap;