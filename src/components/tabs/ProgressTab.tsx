import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Button, Grid, Stack, Typography } from "@mui/material";

import LineProgressChart from "../charts/LineProgressChart";

import QueryStatsIcon from '@mui/icons-material/QueryStats';

interface ProgressTabProps {
  isDarkMode: boolean;
};

const ProgressTab = ({ isDarkMode }: ProgressTabProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Stack direction='column' justifyContent='flex-start' spacing={2} sx={{ mr: 1 }}>
                <Typography variant='h6' sx={{ mx: 2 }}>Snatch</Typography>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <LineProgressChart />
                </Stack>
              </Stack>
              <Button size='small' variant='outlined' color={isDarkMode ? 'secondary' : 'primary'}>
                <Stack direction='row' spacing={1}>
                  <QueryStatsIcon fontSize='small' />
                  <Typography>View</Typography>
                </Stack>
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Stack direction='column' justifyContent='flex-start' spacing={2} sx={{ mr: 1 }}>
                <Typography variant='h6' sx={{ mx: 2 }}>Clean & Jerk</Typography>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <LineProgressChart />
                </Stack>
              </Stack>
              <Button size='small' variant='outlined' color={isDarkMode ? 'secondary' : 'primary'}>
                <Stack direction='row' spacing={2}>
                  <QueryStatsIcon fontSize='small' />
                  <Typography>View</Typography>
                </Stack>
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Stack direction='column' justifyContent='flex-start' spacing={2} sx={{ mr: 1 }}>
                <Typography variant='h6' sx={{ mx: 2 }}>Clean</Typography>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <LineProgressChart />
                </Stack>
              </Stack>
              <Button size='small' variant='outlined' color={isDarkMode ? 'secondary' : 'primary'}>
                <Stack direction='row' spacing={2}>
                  <QueryStatsIcon fontSize='small' />
                  <Typography>View</Typography>
                </Stack>
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Stack direction='column' justifyContent='flex-start' spacing={2} sx={{ mr: 1 }}>
                <Typography variant='h6' sx={{ mx: 2 }}>Jerk</Typography>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <LineProgressChart />
                </Stack>
              </Stack>
              <Button size='small' variant='outlined' color={isDarkMode ? 'secondary' : 'primary'}>
                <Stack direction='row' spacing={2}>
                  <QueryStatsIcon fontSize='small' />
                  <Typography>View</Typography>
                </Stack>
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  )
};

export default ProgressTab;