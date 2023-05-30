import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material"

interface StatsTabProps {
  isDarkMode: boolean;
};

const StatsTab = ({ isDarkMode }: StatsTabProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack direction='column' spacing={2} sx={{ mx: 1 }}>
              <Typography variant='h6'>Athlete Stats</Typography>
              <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                <TextField variant='filled' size='small' label='Name' defaultValue='Elizabread' />
                <TextField variant='filled' size='small' label='Height' defaultValue='160 cm' />
                <TextField variant='filled' size='small' label='Weight' defaultValue='52 kg' />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack direction='column' spacing={2} sx={{ mx: 1 }}>
              <Typography variant='h6'>Account Settings</Typography>
              <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                <TextField variant='filled' size='small' label='username' defaultValue='l_am_null' />
                <TextField variant='filled' size='small' label='Email' defaultValue='some@email.com' />
                <Button variant='outlined' color={isDarkMode ? 'secondary' : 'primary'}>Change Password</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default StatsTab;