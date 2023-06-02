import React, { useState, useEffect } from "react";
import { Box, Button, Fab, Grid, IconButton, ListItem, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

// TODO
import { ListProgramsQuery } from "../API";
// TODO

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


import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';

import { useTheme } from '@mui/material/styles';

import SelectedSessionDialog from "../components/SelectedSessionDialog";
import CreateSessionDialog from "../components/CreateSessionDialog";

import ProgressTab from "../components/tabs/ProgressTab";
import ProgramsTab from "../components/tabs/ProgramsTab";
import ReviewTab from "../components/tabs/ReviewTab";
import ScheduleTab from "../components/tabs/ScheduleTab";
import StatsTab from "../components/tabs/StatsTab";
import AccountTab from "../components/tabs/AccountTab";
import { parse } from "path";

interface MainPageProps {
  isDarkMode: boolean;
}

const MainPage = ({ isDarkMode }: MainPageProps) => {
  const theme = useTheme();

  // TODO
  const [programs, setPrograms] = useState([]);
  //

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [openSelectedSessionDialog, setOpenSelectedSessionDialog] = useState(false);
  const [openCreateSessionDialog, setOpenCreateSessionDialog] = useState(false)
  const [selectedSession, setSelectedSession] = useState({});
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

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

  // TODO: Pull programs from backend
  const fetchPrograms = async () => {
    const allPrograms: any = await API.graphql({ query: queries.listPrograms });
    console.log('allPrograms:');
    const programsList = allPrograms?.data?.listPrograms?.items;
    console.log(programsList);

    if (programsList) {
      const parsedProgramList = programsList.map((programItem: any) => {
        return ({
          ...programItem,
          program: programItem?.program?.map((sessionItem: any) => {
            return (JSON.parse(sessionItem));
          }),
        });
      })
      console.log('parsedProgramList: ');
      console.log(parsedProgramList);
      // TODO: set parsed programs here
      setPrograms(parsedProgramList);
    }

    // console.log(allPrograms);
  };
  // TODO
  useEffect(() => {
    try {
      fetchPrograms();
      console.log('FETCHED');
    } catch (error) {
      console.log('error', error);
    }
  }, []);
  // TODO - end

  useEffect(() => {

  })

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      overflow='auto'
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          // variant="fullWidth"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={tabValue}
          onChange={handleChangeTab}
        >
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
          <Tab label={
            <Stack alignItems='center' justifyContent='center' spacing={0.5}>
              <AssignmentIcon />
              <Typography variant='caption'>Review</Typography>
            </Stack>} />
          <Tab label={
            <Stack alignItems='center' justifyContent='center' spacing={0.5}>
              <CalendarTodayIcon />
              <Typography variant='caption'>Schedule</Typography>
            </Stack>} />
          <Tab label={
            <Stack alignItems='center' justifyContent='center' spacing={0.5}>
              <PersonIcon />
              <Typography variant='caption'>Stats</Typography>
            </Stack>} />
          <Tab label={
            <Stack alignItems='center' justifyContent='center' spacing={0.5}>
              <SettingsIcon />
              <Typography variant='caption'>Account</Typography>
            </Stack>} />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={tabValue}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={tabValue} index={0}>
          <ProgramsTab isDarkMode={isDarkMode} selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} setSelectedSession={setSelectedSession} setSelectedProgram={setSelectedProgram} setOpenSelectedSessionDialog={setOpenSelectedSessionDialog} setOpenCreateSessionDialog={setOpenCreateSessionDialog}
            programs={programs}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ProgressTab isDarkMode={isDarkMode} />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <ReviewTab isDarkMode={isDarkMode} />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <ScheduleTab isDarkMode={isDarkMode} />
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <StatsTab isDarkMode={isDarkMode} />
        </TabPanel>
        <TabPanel value={tabValue} index={5}>
          <AccountTab isDarkMode={isDarkMode} />
        </TabPanel>
      </SwipeableViews>
      <CreateSessionDialog openCreateSessionDialog={openCreateSessionDialog} setOpenCreateSessionDialog={setOpenCreateSessionDialog} />
      <SelectedSessionDialog isDarkMode={isDarkMode} selectedSession={selectedSession} selectedProgram={selectedProgram} openSelectedSessionDialog={openSelectedSessionDialog} setOpenSelectedSessionDialog={setOpenSelectedSessionDialog} />
    </Box>
  );
};

export default MainPage;