// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';
import { Box, Switch } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import SiteHeader from './components/SiteHeader';
import MainPage from './pages/MainPage';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  const theme = createTheme({
    palette: {
      // mode: 'light',
      // mode: 'dark',
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        // main: '#b53f41',
        // main: '#ad4a4b',
        // main: '#332b41',
        // main: '#3d3a4a',
        // main: '#2e2e39',
        main: '#363646',
      },
      secondary: {
        main: '#ffffff',
        // main: '#ad4a4b',
        // main: '#efebfb',
        // main: '#eeebfb',
        // main: '#9e9e9e',
        // main: '#212121'     
      },
    },
    typography: {
      fontFamily: 'Montserrat',
      // fontFamily: 'Kanit',
      // fontFamily: 'Orbitron',
      // fontFamily: 'Bruno Ace SC',
      // fontFamily: 'Athiti',
      // fontFamily: 'Patrick Hand',
      h1: {
        fontFamily: 'Orbitron',
      },
      h2: {
        fontFamily: 'Orbitron',
      },
      h3: {
        fontFamily: 'Orbitron',
      },
      h4: {
        fontFamily: 'Orbitron',
      },
      h5: {
        fontFamily: 'Orbitron',
      },
      h6: {
        fontFamily: 'Orbitron',
      },
      // h1: {
      //   fontFamily: 'Bruno Ace SC',
      // },
      // h2: {
      //   fontFamily: 'Bruno Ace SC',
      // },
      // h3: {
      //   fontFamily: 'Bruno Ace SC',
      // },
      // h4: {
      //   fontFamily: 'Bruno Ace SC',
      // },
      // h5: {
      //   fontFamily: 'Bruno Ace SC',
      // },
      // h6: {
      //   fontFamily: 'Bruno Ace SC',
      // },
    },
  });

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <div style={{ backgroundColor: isDarkMode ? '#696969' : '#bdbdbd', minHeight: '100vh', width: '100%' }}>
          <SiteHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} handleChangeSwitch={handleChangeSwitch} />
          <MainPage />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
