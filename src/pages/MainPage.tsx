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
import LineProgressChart from "../components/charts/LineProgressChart";
import ProgressTab from "../components/tabs/ProgressTab";
import ProgramsTab from "../components/tabs/ProgramsTab";
import StatsTab from "../components/tabs/StatsTab";
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
    programName: '3 Day Chinese',
    programInfo: [
      {
        sessionName: 'Session 1A',
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
        sessionName: 'Session 1B',
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
        sessionName: 'Session 1C',
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
        sessionName: 'Session 2A',
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
        sessionName: 'Session 2B',
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
        sessionName: 'Session 2C',
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
        sessionName: 'Session 3A',
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
        sessionName: 'Session 3B',
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
        sessionName: 'Session 3C',
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
        sessionName: 'Session 4A',
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
        sessionName: 'Session 4B',
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
        sessionName: 'Session 4C',
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
      height="100vh"
      display="flex"
      flexDirection="column"
      overflow='auto'
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
          <StatsTab isDarkMode={isDarkMode} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ProgramsTab isDarkMode={isDarkMode} selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} setSelectedSession={setSelectedSession} setOpenSelectedSessionDialog={setOpenSelectedSessionDialog} setOpenCreateSessionDialog={setOpenCreateSessionDialog} dummyData={dummyData} dummyData0={dummyData0} />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <ProgressTab isDarkMode={isDarkMode} />
        </TabPanel>
      </SwipeableViews>
      <CreateSessionDialog openCreateSessionDialog={openCreateSessionDialog} setOpenCreateSessionDialog={setOpenCreateSessionDialog} />
      <SelectedSessionDialog programName={dummyData?.programName} isDarkMode={isDarkMode} selectedSession={selectedSession} setSelectedSession={setSelectedSession} openSelectedSessionDialog={openSelectedSessionDialog} setOpenSelectedSessionDialog={setOpenSelectedSessionDialog} />
    </Box>
  );
};

export default MainPage;