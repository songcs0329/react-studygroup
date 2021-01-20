import React from 'react';
import { changeDate } from '../../utils/utils';
import { MovieDetailStyles } from './MovieDetailStyles';

const MovieDetail = ({detail, onBack}) => {
  const {movieNm, openDt, prdtStatNm, showTm, directors, actors, genres, audits, companys} = detail

  return (
    <MovieDetailStyles>
      <div>
        <button type={"button"} className={"back"} onClick={onBack}><i className={"hide"}>뒤로가기</i></button>
        <label className={`status ${prdtStatNm === "개봉" ? "opened" : prdtStatNm === "개봉예정" ? "released": null}`}>{prdtStatNm}</label>
        <h4>{movieNm} <small>( {audits[0].watchGradeNm} )</small></h4>
        <section className={"info"}>
          <strong>기본정보</strong>
          <div className={"desc"}>
            <dl>
              <dt>개봉연도</dt>
              <dd>{changeDate(openDt)}</dd>
            </dl>
            <dl>
              <dt>상영시간</dt>
              <dd>{showTm}분</dd>
            </dl>
          </div>
          <div className={"desc"}>
            <dl>
              <dt>장르</dt>
              {
                genres.map((genre, index) => <dd key={index}>{genre.genreNm}</dd>)
              }
            </dl>
            <dl>
              <dt>제작사</dt>
              {
                companys.map((company, index) => <dd key={index}>{company.companyNm}</dd>)
              }
            </dl>
          </div>
        </section>
        <section className={"info"}>
          <strong>감독/출연</strong>
          <div className={"desc"}>
            <ul>
              <li>
                <strong>{directors[0].peopleNm}</strong>
                <span>감독</span>
              </li>
              {
                actors.map((actor, index) => {
                  return (
                    <li key={index}>
                      <strong>{actor.peopleNm}</strong>
                      <span className={`${!actor.cast ? "none" : null}`}>{!actor.cast? "정보없음" : actor.cast}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
      </div>
    </MovieDetailStyles>
  );
};

export default MovieDetail;