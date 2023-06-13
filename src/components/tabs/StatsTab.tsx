import { Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material"

// import makeStyles from "@mui/material/style";

interface StatsTabProps {
  isDarkMode: boolean;
}

// const useStyles = makeStyles({
//   input: {
//     color: "white"
//   }
// });

const StatsTab = ({isDarkMode}: StatsTabProps) => {
  // const classes = useStyles();
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
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
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack direction='column' spacing={2} sx={{ mx: 1 }}>
              <Typography variant='h6'>Max Lifts</Typography>
              <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                <TextField variant='filled' size='small' label='Clean' defaultValue='45 kg' />
                <TextField variant='filled' size='small' label='Clean & Jerk' defaultValue='40 kg' />
                <TextField variant='filled' size='small' label='Jerk' defaultValue='40 kg' />
                <TextField variant='filled' size='small' label='Snatch' defaultValue='35 kg' />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default StatsTab;