import { AppBar, Box, Button, FormControlLabel, Grid, IconButton, Stack, Switch, Typography } from "@mui/material";

import { Auth } from 'aws-amplify';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

interface SiteHeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: any;
  handleChangeSwitch: any;
}

const SiteHeader = ({ isDarkMode, setIsDarkMode, handleChangeSwitch }: SiteHeaderProps) => {
  
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
              <FitnessCenterIcon />
              <Typography variant='h5'>LogOly</Typography>
            </Stack>
          </Grid>
          {/* <Grid item>
            <Switch
              checked={isDarkMode}
              onChange={handleChangeSwitch}
              color="secondary"
              size='small'
            />
          </Grid> */}
          {/* <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Button size='small' sx={{ textTransform: 'none' }} variant='contained' color='secondary'>
              <Stack direction='row' spacing={0.5}>
                <LogoutIcon />
                <Typography fontFamily='Orbitron'>Log Out</Typography>
              </Stack>
            </Button>
          </Grid> */}
          {/* <Grid item display={{ xs: 'block', sm: 'none' }}> */}
          <Grid item>
            <Stack direction='row' spacing={0.5} alignItems='center' justifyContent='center'>
              <Switch
                checked={isDarkMode}
                onChange={handleChangeSwitch}
                color="secondary"
                size='small'
              />
              {/* <FormControlLabel
                value="top"
                control={<Switch
                  checked={isDarkMode}
                  onChange={handleChangeSwitch}
                  color="secondary"
                  size='small'
                />}
                label="Top"
                labelPlacement="top"
              /> */}
              <IconButton onClick={signOut} color="secondary">
                <LogoutIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        {/* </Stack> */}
      </Box>
    </AppBar >
  );
};

export default SiteHeader;