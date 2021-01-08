import React from 'react';
import MoviesWrap from './Containers/MoviesWrap';
import { GlobalStyles } from './GlobalStyles'
import { MoviesProvider } from './hooks/MoviesProvider';

const App = () => {
  return (
    <MoviesProvider>
      <GlobalStyles/>
      <MoviesWrap/>
    </MoviesProvider>
  );
};

export default App;