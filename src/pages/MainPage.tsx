import React, { useState } from "react";
import { Box, Button, Fab, Grid, IconButton, ListItem, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";

// TODO: Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'
//

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import SwipeableViews from 'react-swipeable-views';

// TODO
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// TODO - end

import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import { useTheme } from '@mui/material/styles';

import SelectedSessionDialog from "../components/SelectedSessionDIalog";
import CreateSessionDialog from "../components/CreateSessionDialog";

// TEST 
import StartSessionDialog from "../components/StartSessionDialog";
//

interface MainPageProps {
  isDarkMode: boolean;
}

const MainPage = ({ isDarkMode }: MainPageProps) => {
  const theme = useTheme();

  // TEST
  const [openStartSessionDialog, setOpenStartSessionDialog] = useState(false);
  //

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [openSelectedSessionDialog, setOpenSelectedSessionDialog] = useState(false);
  const [openCreateSessionDialog, setOpenCreateSessionDialog] = useState(false)
  const [selectedSession, setSelectedSession] = useState({});


  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  // TODO: Dummy data for the session ListItems
  const dummyData = {
    programName: '3 Day Chinese Program',
    programInfo: [
      {
        sessionName: '3 Day Chinese 1A',
        exercises: [
          {
            exerciseName: 'Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Power Clean & Jerk',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Snatch Pull',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Front Squat',
            sets: 3,
            reps: 1,
            percent: '85%'
          },
          {
            exerciseName: 'Rows',
            sets: 6,
            reps: 5,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 1B',
        exercises: [
          {
            exerciseName: 'Back Squat',
            sets: 3,
            reps: 3,
            percent: '90%'
          },
          {
            exerciseName: 'Clean',
            sets: 5,
            reps: 2,
            percent: '85%'
          },
          {
            exerciseName: 'Hang Snatch',
            sets: 5,
            reps: 2,
            percent: '85%'
          },
          {
            exerciseName: 'Deadlift',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Dips',
            sets: 5,
            reps: 10,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 1C',
        exercises: [
          {
            exerciseName: 'Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Clean & Jerk',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Clean Pull',
            sets: 5,
            reps: 3,
            percent: '100%'
          },
          {
            exerciseName: 'Front Squat',
            sets: 3,
            reps: 3,
            percent: '90%'
          },
          {
            exerciseName: 'Jerk Dip',
            sets: 3,
            reps: 3,
            percent: '100%'
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 2A',
        exercises: [
          {
            exerciseName: 'Snatch Deadlift',
            sets: 3,
            reps: 3,
            percent: '100%'
          },
          {
            exerciseName: 'Power Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Power Clean + Push Press',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Back Squat',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Pull Ups',
            sets: 5,
            reps: 10,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 2B',
        exercises: [
          {
            exerciseName: 'Power Clean & Power Jerk',
            sets: 5,
            reps: 2,
            percent: '85%'
          },
          {
            exerciseName: 'Snatch From Knees',
            sets: 3,
            reps: 2,
            percent: '85%'
          },
          {
            exerciseName: 'Clean Pull',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Drop Snatch',
            sets: 5,
            reps: 2,
            percent: '80%'
          },
          {
            exerciseName: 'Press From Rack',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 2C',
        exercises: [
          {
            exerciseName: 'Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Clean & Jerk',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Jerk Recovery',
            sets: 5,
            reps: 3,
            percent: '100%'
          },
          {
            exerciseName: 'Front Squat',
            sets: 3,
            reps: 3,
            percent: '90%'
          },
          {
            exerciseName: 'Good Morning',
            sets: 5,
            reps: 5,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 3A',
        exercises: [
          {
            exerciseName: 'Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Power Clean',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Jerk From Rack',
            sets: 5,
            reps: 2,
            percent: '85%'
          },
          {
            exerciseName: 'Back Squat',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Situps',
            sets: 5,
            reps: 15,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 3B',
        exercises: [
          {
            exerciseName: 'Front Squat',
            sets: 3,
            reps: 3,
            percent: '90%'
          },
          {
            exerciseName: 'Jerk Dips',
            sets: 3,
            reps: 3,
            percent: '100%'
          },
          {
            exerciseName: 'Clean',
            sets: 3,
            reps: 2,
            percent: '85%'
          },
          {
            exerciseName: 'Snatch Deadlift',
            sets: 5,
            reps: 3,
            percent: '100%'
          },
          {
            exerciseName: 'Rows',
            sets: 6,
            reps: 5,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 3C',
        exercises: [
          {
            exerciseName: 'Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Clean & Jerk',
            sets: 3,
            reps: 2,
            percent: '85%'
          },
          {
            exerciseName: 'Snatch Pull From Box',
            sets: 5,
            reps: 3,
            percent: '100%'
          },
          {
            exerciseName: 'Drop Snatch',
            sets: 5,
            reps: 3,
            percent: '80%'
          },
          {
            exerciseName: 'Back Squat',
            sets: 5,
            reps: 3,
            percent: '85'
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 4A',
        exercises: [
          {
            exerciseName: 'Muscle Snatch',
            sets: 5,
            reps: 2,
            percent: '70%'
          },
          {
            exerciseName: 'Push Press From Rack',
            sets: 3,
            reps: 3,
            percent: '70%'
          },
          {
            exerciseName: 'Front Squat',
            sets: 3,
            reps: 3,
            percent: '70%'
          },
          {
            exerciseName: 'Good Morning',
            sets: 5,
            reps: 5,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 4B',
        exercises: [
          {
            exerciseName: 'Power Snatch',
            sets: 3,
            reps: 2,
            percent: '70%'
          },
          {
            exerciseName: 'Power Clean & Power Jerk',
            sets: 3,
            reps: 2,
            percent: '70%'
          },
          {
            exerciseName: 'Rows',
            sets: 5,
            reps: 5,
            percent: '80%'
          },
          {
            exerciseName: 'Situps',
            sets: 5,
            reps: 10,
            percent: ''
          },
        ]
      },
      {
        sessionName: '3 Day Chinese 4C',
        exercises: [
          {
            exerciseName: 'Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Clean & Jerk',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Back Squat',
            sets: 3,
            reps: 3,
            percent: '90%'
          },
          {
            exerciseName: 'Snatch Pull From Box',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Rows',
            sets: 6,
            reps: 5,
            percent: ''
          },
        ]
      },
    ]
  };
  // TODO - end

  // TODO:
  const dummyData0 = {
    programName: 'Another Program',
    programInfo: [
      {
        sessionName: 'Another Program 1A',
        exercises: [
          {
            exerciseName: 'Muscle Snatch',
            sets: 5,
            reps: 2,
            percent: '70%'
          },
          {
            exerciseName: 'Push Press From Rack',
            sets: 3,
            reps: 3,
            percent: '70%'
          },
          {
            exerciseName: 'Front Squat',
            sets: 3,
            reps: 3,
            percent: '70%'
          },
          {
            exerciseName: 'Good Morning',
            sets: 5,
            reps: 5,
            percent: ''
          },
        ]
      },
      {
        sessionName: 'Another Program 1B',
        exercises: [
          {
            exerciseName: 'Power Snatch',
            sets: 3,
            reps: 2,
            percent: '70%'
          },
          {
            exerciseName: 'Power Clean & Power Jerk',
            sets: 3,
            reps: 2,
            percent: '70%'
          },
          {
            exerciseName: 'Rows',
            sets: 5,
            reps: 5,
            percent: '80%'
          },
          {
            exerciseName: 'Situps',
            sets: 5,
            reps: 10,
            percent: ''
          },
        ]
      },
      {
        sessionName: 'Another Program 1C',
        exercises: [
          {
            exerciseName: 'Snatch',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Clean & Jerk',
            sets: 3,
            reps: 1,
            percent: '90%'
          },
          {
            exerciseName: 'Back Squat',
            sets: 3,
            reps: 3,
            percent: '90%'
          },
          {
            exerciseName: 'Snatch Pull From Box',
            sets: 5,
            reps: 3,
            percent: '85%'
          },
          {
            exerciseName: 'Rows',
            sets: 6,
            reps: 5,
            percent: ''
          },
        ]
      },
    ],
  };
  // TODO - end

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const [tabValue, setTabValue] = React.useState(1);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setTabValue(index);
  };

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    // sx={{ m: 2 }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={tabValue} onChange={handleChangeTab}>
          <Tab label={
            <Stack alignItems='center' justifyContent='center' spacing={0.5}>
              <PersonIcon />
              <Typography variant='caption'>Account</Typography>
            </Stack>} />
          <Tab label={
            <Stack alignItems='center' justifyContent='center' spacing={0.5}>
              <FitnessCenterIcon />
              <Typography variant='caption'>Programs</Typography>
            </Stack>} />
          <Tab label={
            <Stack alignItems='center' justifyContent='center' spacing={0.5}>
              <ShowChartIcon />
              <Typography variant='caption'>Progress</Typography>
            </Stack>} />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={tabValue}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={tabValue} index={0}>
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
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth sx={{ textTransform: 'none' }}>
                <Stack width='100%' direction='row' spacing={1} alignItems='center' justifyContent='center'>
                  <AddIcon />
                  <Typography variant='h6'>Create Program</Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant='h6'>{dummyData?.programName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack alignItems='center' justifyContent='flex-end'>
                    <Button fullWidth size='small' color={isDarkMode ? 'secondary' : 'primary'}
                      onClick={() => {
                        setOpenCreateSessionDialog(true);
                      }}
                    >
                      <Stack width='100%' direction='row' spacing={0.5} alignItems='center' justifyContent='flex-end'>
                        <Typography variant='overline'>Create session</Typography>
                        <AddIcon fontSize='small' />
                      </Stack>
                    </Button>
                  </Stack>
                  <List component="nav" disablePadding sx={{ maxHeight: 200, overflow: 'auto' }}>
                    {dummyData?.programInfo?.map((session: any, index: any) => (
                      <ListItemButton key={index}
                        selected={selectedIndex === index}
                        onClick={(event) => {
                          handleListItemClick(event, index);
                          setSelectedSession(session);
                          setOpenSelectedSessionDialog(true);
                        }}
                      >
                        <ListItemText primary={session.sessionName} />
                      </ListItemButton>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Grid>
            {/* TODO - We'll need to iterate over the programs instead */}
            <Grid item xs={12} sm={6}>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant='h6'>{dummyData0?.programName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack alignItems='center' justifyContent='flex-end'>
                    <Button fullWidth size='small' color={isDarkMode ? 'secondary' : 'primary'}
                      onClick={() => {
                        setOpenCreateSessionDialog(true);
                      }}
                    >
                      <Stack width='100%' direction='row' spacing={0.5} alignItems='center' justifyContent='flex-end'>
                        <Typography variant='overline'>Create session</Typography>
                        <AddIcon fontSize='small' />
                      </Stack>
                    </Button>
                  </Stack>
                  <List component="nav" disablePadding sx={{ maxHeight: 300, overflow: 'auto' }}>
                    {dummyData0?.programInfo?.map((session: any, index: any) => (
                      <ListItemButton key={index}
                        selected={selectedIndex === index}
                        onClick={(event) => {
                          handleListItemClick(event, index);
                          setSelectedSession(session);
                          setOpenSelectedSessionDialog(true);
                        }}
                      >
                        <ListItemText primary={session.sessionName} />
                      </ListItemButton>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      {/* TODO - Move these */}
      <CreateSessionDialog openCreateSessionDialog={openCreateSessionDialog} setOpenCreateSessionDialog={setOpenCreateSessionDialog} />
      <SelectedSessionDialog isDarkMode={isDarkMode} selectedSession={selectedSession} setSelectedSession={setSelectedSession} openSelectedSessionDialog={openSelectedSessionDialog} setOpenSelectedSessionDialog={setOpenSelectedSessionDialog} />
      {/* TEST */}
      {/* <StartSessionDialog openStartSessionDialog={openStartSessionDialog} setOpenStartSessionDialog={setOpenStartSessionDialog} /> */}

    </Box>
  );
};

export default MainPage;