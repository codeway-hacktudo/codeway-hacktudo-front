import React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import usePeristedState from './hooks/usePersistedState';

import distributor1Theme from './styles/themes/distributor1';
import distributor2Theme from './styles/themes/distributor2';

// import Menu from './components/app-menu';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>(
    'distributor1Theme',
    distributor1Theme,
  );

  const toggleTheme = (pickTheme: string): void => {
    setTheme(
      pickTheme === 'distributor1Theme' ? distributor1Theme : distributor2Theme,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
