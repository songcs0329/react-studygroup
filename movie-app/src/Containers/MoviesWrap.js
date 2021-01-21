import React, { useState, useEffect } from 'react';
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
  const [mounted, setMounted] = useState(false)
  const state = useMoviesState()
  const dispatch = useMoviesDispatch()
  const {loading, movies, error, options, date} = state

  useEffect(() => {
    const fetchMoives = async () => {
      setMounted(!mounted)
      return await AsyncData(dispatch, date, options, getMoviesDay)
    }
    if(!mounted) fetchMoives()
  },[dispatch, date, options, mounted])

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