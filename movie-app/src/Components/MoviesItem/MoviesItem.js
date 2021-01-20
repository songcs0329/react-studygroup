import React from 'react';
import {MoviesItemStyles} from './MoviesItemStyles';
import {Link} from "react-router-dom";
import { comma } from '../../utils/utils';

const MovieItem = ({item}) => {
  const {movieCd, rank, movieNm, rankOldAndNew, audiChange, audiAcc, salesChange, salesAcc} = item

  return (
    <MoviesItemStyles>
      <Link to={`/detail/${movieCd}`}>
        <label className={rankOldAndNew.toLowerCase()}>{rankOldAndNew.charAt(0)}</label>
        <div className={"item_info"}><strong>{rank}</strong><br/>{movieNm}</div>
        <div className={`item_rate ${audiChange > 0 ? "up" : "down"}`}>
          <span>관객수 : {comma(audiAcc)}명<b className={"per"}>{audiChange}</b></span>
          <span>매출액 : {comma(salesAcc)}원<b className={"per"}>{salesChange}</b></span>
        </div>
      </Link>
    </MoviesItemStyles>
  );
};

export default MovieItem;