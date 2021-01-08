import React from 'react';
import { Error, Loading } from '../Components/Default';

const MoviesList = ({loading, date, error}) => {
  if(loading) return <Loading></Loading>
  if(error) return <Error message={error}></Error>
  
  return (
    <div>
      moviesList
    </div>
  );
};

export default MoviesList;