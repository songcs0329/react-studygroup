import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getMovieDetail } from '../apis/movies';
import { Loading } from '../Components/Default';
import MovieDetail from '../Components/MovieDetail/MovieDetail'

const MovieDetailWrap = () => {
  const { movieCd } = useParams()
  const history = useHistory()
  const [detail, setDetail] = useState()
  
  const handleBack = () => history.goBack()

  useEffect(() => {
    getMovieDetail(movieCd).then(data => setDetail(data.movieInfoResult.movieInfo))
  }, [movieCd])
  
  if(!detail) return <Loading/>
  else return <MovieDetail detail={detail} onBack={handleBack}/>
};

export default MovieDetailWrap;