import { useEffect } from "react";

import { AppBar, Box, Button, Fab, FormControlLabel, Grid, IconButton, Stack, Switch, Typography } from "@mui/material";

import { Auth } from 'aws-amplify';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

interface SiteHeaderProps {
  user: any;
  isDarkMode: boolean;
  setIsDarkMode: any;
  handleChangeSwitch: any;
}

const SiteHeader = ({ user, isDarkMode, setIsDarkMode, handleChangeSwitch }: SiteHeaderProps) => {

  // TODO: Just checking for user attributes
  useEffect(() => {
    console.log('USER:');
    console.log(user);
  }, [user])

  const signOut = async () => {
    try {
      await Auth.signOut();
      // await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <AppBar position="static">
      <Box sx={{ m: 2 }}>
        <Grid container direction='row' alignItems='center' justifyContent='space-between'>
          <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
              <FitnessCenterIcon />
              <Typography variant='h4'>LogOly</Typography>
            </Stack>
          </Grid>
          <Grid item display={{ xs: 'block', sm: 'none' }}>
            <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
              <FitnessCenterIcon fontSize='small' />
              <Typography variant='h5'>LogOly</Typography>
            </Stack>
          </Grid>
          <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
              <Switch
                checked={isDarkMode}
                onChange={handleChangeSwitch}
                color="secondary"
                size='small'
              />
              <Fab onClick={signOut} color='secondary' size="small" >
                <LogoutIcon />
              </Fab>
            </Stack>
          </Grid>
          <Grid item display={{ xs: 'block', sm: 'none' }}>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
              <Switch
                checked={isDarkMode}
                onChange={handleChangeSwitch}
                color="secondary"
                size='small'
              />
              <Fab onClick={signOut} color='secondary' size="small" >
                <LogoutIcon fontSize='small' />
              </Fab>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </AppBar >
  );
};

export default SiteHeader;