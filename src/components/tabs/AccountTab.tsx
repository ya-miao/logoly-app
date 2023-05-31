import { Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography } from "@mui/material"

interface AccountTabProps {
  isDarkMode: boolean;
};

const AccountTab = ({ isDarkMode }: AccountTabProps) => {
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack direction='column' spacing={2} sx={{ mx: 1 }}>
              <Typography variant='h6'>Athlete Stats</Typography>
              <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                <TextField variant='filled' size='small' label='Name' defaultValue='Elizabread' />
                <TextField variant='filled' size='small' label='Gender' defaultValue='Female' />
                <TextField variant='filled' size='small' label='Birthday' defaultValue='1997/08/10' />
                <TextField variant='filled' size='small' label='Height' defaultValue='160 cm' />
                <TextField variant='filled' size='small' label='Weight' defaultValue='52 kg' />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid> */}
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack direction='column' spacing={2} sx={{ mx: 1 }}>
              <Typography variant='h6'>Account Settings</Typography>
              <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                <TextField variant='filled' size='small' label='username' defaultValue='l_am_null' />
                <TextField variant='filled' size='small' label='Email' defaultValue='some@email.com' />
                <Divider />
                <Button variant='outlined' color={isDarkMode ? 'secondary' : 'primary'} sx={{ width: '80%' }}>Change Password</Button>
                <Button variant='outlined' color='error' sx={{ width: '80%' }}>Delete Account</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default AccountTab;