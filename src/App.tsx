import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { COLORS } from './constants';

import Router from './router';
import store from './store';

const theme: DefaultTheme = {
  borderRadius: '4px',
  borderColor: '#cccccc',
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    black: COLORS.black,
    white: COLORS.white,
  },
  fonts: {
    sm: '18px',
    md: '27px',
    lg: '36px',
  },
  spacing: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

const App: React.FC = () => {
  useEffect(() => {
    const loaderEl = document.getElementById('loader');
    loaderEl?.remove(); // remove root loader from index.html
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
