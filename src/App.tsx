import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { COLORS, FONTS, SPACING } from './constants';

import Router from './router';
import store from './store';

const theme: DefaultTheme = {
  borderRadius: '4px',
  borderColor: '#cccccc',
  colors: {
    ...COLORS,
  },
  fonts: {
    ...FONTS,
  },
  spacing: {
    ...SPACING,
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
