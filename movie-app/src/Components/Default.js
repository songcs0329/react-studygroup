import React from 'react';
import {LoadingPop, ErrorMsg} from '../GlobalStyles'

export const Loading = () => {
  return <LoadingPop><div className="loading-circle"></div></LoadingPop>
};

export const Error = message => {
  return <ErrorMsg>{message}</ErrorMsg>
}