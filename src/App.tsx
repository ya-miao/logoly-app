// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from 'react';
import { AppBar, Box, Card, CardContent, Paper, Stack, Typography } from '@mui/material';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import SiteHeader from './components/SiteHeader';
import MainPage from './pages/MainPage';

import { Authenticator, ThemeProvider as AuthThemeProvider, Theme, useTheme as authUseTheme, } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  const siteTheme = createTheme({
    palette: {
      // mode: 'light',
      // mode: 'dark',
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        // main: isDarkMode ? '#212121' : '#363646',
        // main: '#9a3a3a',
        // main: '#9a4747',
        // main: '#cccccc',
        main: '#ffffff',
      },
      secondary: {
        // main: '#ffffff',
        // main: '#9a3a3a',
        main: '#9a4747',
        // main: '#eeebfb',
        // main: '#101010'
      },
    },
    typography: {
      allVariants: {
        color: '#ffffff',
      },
      fontFamily: 'Montserrat',
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
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            color: '#ffffff',
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: '#ffffff',
          }
        }
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            // backgroundColor: '#1d1d1d',
            backgroundColor: '#101010',
            color: '#ffffff',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#101010',
            color: '#ffffff',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            // backgroundColor: '#1d1d1d',
            backgroundColor: '#101010',
            color: '#ffffff',
          },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            color: '#ffffff',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: '#ffffff',
          },
        }
      },
      // MuiLinearProgress: {
      //   styleOverrides: {
      //     root: {
      //       color: '#9a4747',
      //     },
      //   },
      // },
      MuiMobileStepper: {
        styleOverrides: {
          progress: {
            // color: '#9a4747',
            backgroundColor: '#1d1d1d',
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#101010',
            color: '#ffffff',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            // color: "#aaaaaa",
            color: "#909090",
            // color: "#ffffff",
          },
        },
      },
    }
  });

  const { tokens } = authUseTheme();

  const authTheme: Theme = {
    name: 'Auth Theme',
    tokens: {
      fonts: {
        default: {
          variable: { value: 'Montserrat' },
          static: { value: 'Montserrat' },
        },
      },
      colors: {
        background: {
          primary: {
            // value: isDarkMode ? '#212121' : '#363646',
            value: '#1d1d1d',
          },
          secondary: {
            value: '#ffffff',
          },
        },
        font: {
          primary: {
            value: '#ffffff'
          },
          secondary: {
            value: '#363646'
          },
          interactive: {
            value: '#ffffff',
          },
        },
        brand: {
          primary: {
            '10': '#BDBDBD',
            '80': '#9E9E9E',
            '90': '#757575',
            '100': '#616161',
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: '#ffffff',
              },
            },
            _hover: {
              color: {
                value: '#9E9E9E',
              },
            },
            _active: {
              color: {
                value: tokens.colors.white.value,
              },
            },
          },
        },
      },
    },
  };

  const components = {
    Header() {
      return (
        <Card sx={{
          mb: 2,
          // bgcolor: isDarkMode ? '#212121' : '#363646'
          bgcolor: '#101010'
        }}>
          <CardContent>
            <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
              <FitnessCenterIcon fontSize='large' color="primary" />
              <Typography variant='h4' color="primary">LogOly</Typography>
            </Stack>
          </CardContent>
        </Card>
      );
    },
    Footer() {
      return (
        <Card sx={{
          mt: 2,
          // bgcolor: isDarkMode ? '#212121' : '#363646'
          bgcolor: '#101010'
        }}>
          <CardContent>
            <Stack direction='row' alignItems='center' justifyContent='center'>
              <Typography variant='overline' color="primary">Train deliberately.</Typography>
            </Stack>
          </CardContent>
        </Card>
      );;
    },
  };

  const formFields = {
    signIn: {
      username: {
        label: '',
        placeholder: 'Username',
      },
      password: {
        label: '',
        placeholder: 'Password',
      },
    },
    signUp: {
      username: {
        label: '',
        placeholder: 'Username',
      },
      password: {
        label: '',
        placeholder: 'Password',
      },
      confirm_password: {
        label: '',
        placeholder: 'Confirm Password',
      },
      email: {
        label: '',
        placeholder: 'Email',
      }
    },
    forceNewPassword: {
      password: {
        label: '',
        placeholder: 'Password',
      },
    },
    resetPassword: {
      username: {
        label: '',
        placeholder: 'Email',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        label: '',
        placeholder: 'Confirmation Code',
      },
      confirm_password: {
        label: '',
        placeholder: 'Password',
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: '',
        placeholder: 'Confirmation Code',
      },
    },
  };

  return (
    <ThemeProvider theme={siteTheme}>
      <div style={{
        // backgroundColor: isDarkMode ? '#696969' : '#bdbdbd',
        backgroundColor: '#696969',
        minHeight: '180vh', width: '100%'
      }}>
        <Box
          height="100vh"
          // height="180vh"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <AuthThemeProvider theme={authTheme}>
            <Authenticator formFields={formFields} components={components}>
              {({ signOut, user }) => (
                <Box
                  height="100vh"
                  // height="180vh"
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <SiteHeader user={user} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} handleChangeSwitch={handleChangeSwitch} />
                  <MainPage isDarkMode={isDarkMode} />
                </Box>
              )
              }
            </Authenticator>
          </AuthThemeProvider>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
