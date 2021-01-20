import React from 'react';
import { getLatest } from '../../utils/utils';
import { MoviesSearchStyles } from './MoviesSearchStyles';

const MoviesSearch = ({options, date, onChange, onSubmit}) => {

  return (
    <form onSubmit={onSubmit}>
      <MoviesSearchStyles>
        <div className={"insert"}>
          <span className={"select"}>
            <select onChange={onChange} value={options} name={"options"}>
              <option value="daily">일별</option>
              <option value="weekly">주간</option>
            </select>
          </span>
          <span className={"ip"}>
            <input
              type="text"
              name={"date"}
              value={date}
              onChange={onChange}
              placeholder={`날짜를 입력해주세요. ( ex. ${getLatest()} )`}
            />
          </span>
        </div>
        <button type={"submit"} className={"submit_btn"} onClick={onSubmit}>검색</button>
      </MoviesSearchStyles>
    </form>
  );
};

export default MoviesSearch;