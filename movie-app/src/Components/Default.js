import React from 'react';
import {LoadingPop, ErrorMsg} from '../GlobalStyles'

export const Loading = () => {
  return <LoadingPop><div className="loading-circle"></div></LoadingPop>
};

export const Error = message => {
  return <ErrorMsg><strong>{message}</strong>를 확인해주세요.</ErrorMsg>
}