import React from 'react';
import {MoviesItemStyles} from './MoviesItemStyles'

const MovieItem = ({item}) => {
  const {rank, movieNm, rankOldAndNew, audiChange, audiAcc, salesChange, salesAcc} = item

  return (
    <MoviesItemStyles>
      <label className={rankOldAndNew.toLowerCase()}>{rankOldAndNew.charAt(0)}</label>
      <div className={"item_info"}><strong>{rank}</strong><br/>{movieNm}</div>
      <div className={`item_rate ${audiChange > 0 ? "up" : "down"}`}>
        <span>관객수 : {audiAcc}<b className={"per"}>{audiChange}</b></span>
        <span>매출액 : {salesAcc}<b className={"per"}>{salesChange}</b></span>
      </div>
    </MoviesItemStyles>
  );
};

export default MovieItem;