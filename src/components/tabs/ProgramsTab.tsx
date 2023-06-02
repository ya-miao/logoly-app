import { Accordion, AccordionSummary, AccordionDetails, Button, Grid, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// TODO
import { API } from "aws-amplify";
import * as mutations from '../../graphql/mutations';
import { json } from "stream/consumers";
// TODO - end

interface ProgramsTabProps {
  isDarkMode: boolean;
  handleListItemClick: any;
  selectedIndex: any;
  setSelectedSession: any;
  setSelectedProgram: any;
  setOpenSelectedSessionDialog: any;
  setOpenCreateSessionDialog: any;
  programs: any;
};

const ProgramsTab = ({ isDarkMode, selectedIndex, handleListItemClick, setSelectedSession, setSelectedProgram, setOpenSelectedSessionDialog, setOpenCreateSessionDialog, programs }: ProgramsTabProps) => {
  
  // TODO: Test
  // console.log(programs);
  // TODO - end

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant='outlined' fullWidth color={isDarkMode ? 'secondary' : 'primary'} sx={{ textTransform: 'none' }}>
          <Stack width='100%' direction='row' spacing={1} alignItems='center' justifyContent='center'>
            <AddIcon />
            <Typography variant='h6'
              onClick={() => {
                console.log('Create Program!')
              }}
              // onClick={async () => {
              //   try {
              //     const newTodo = await API.graphql({
              //       query: mutations.createProgram,
              //       variables: {
              //         input:
              //         {
              //           user: 'd56e2482-1fa2-4b69-b05b-db8cdb47550f',
              //           name: '5 Day Oly Hypertrophy',
              //           description: 'The primary goal is to increase muscle size using Olympic weightlifting movements and hypertrophy principles.',
              //           program:
              //             [
              //               JSON.stringify({
              //                 sessionName: 'Day 1',
              //                 exercises: [
              //                   {
              //                     exerciseName: 'Hang Squat Snatch',
              //                     sets: 5,
              //                     reps: 5,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Snatch Deadlift',
              //                     sets: 3,
              //                     reps: 5,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Dumbbell Pullovers',
              //                     sets: 3,
              //                     reps: 12,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'High Hang Muscle Snatch',
              //                     sets: 2,
              //                     reps: 15,
              //                     percent: ''
              //                   },
              //                 ]
              //               }),
              //               JSON.stringify({
              //                 sessionName: 'Day 2',
              //                 exercises: [
              //                   {
              //                     exerciseName: 'Squat Clean + Hang Squat Clean + Jerk',
              //                     sets: 5,
              //                     reps: 1,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Pendlay Row',
              //                     sets: 3,
              //                     reps: 12,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Seated Press',
              //                     sets: 3,
              //                     reps: 8,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Triceps Bench Dips',
              //                     sets: 3,
              //                     reps: 25,
              //                     percent: ''
              //                   },
              //                 ]
              //               }),
              //               JSON.stringify({
              //                 sessionName: 'Day 3',
              //                 exercises: [
              //                   {
              //                     exerciseName: 'Back Squat',
              //                     sets: 4,
              //                     reps: 8,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Hamstring Curls',
              //                     sets: 3,
              //                     reps: 5,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Barbell Curls',
              //                     sets: 3,
              //                     reps: 12,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Single Leg Calf Raises',
              //                     sets: 3,
              //                     reps: 10,
              //                     percent: ''
              //                   },
              //                 ]
              //               }),
              //               JSON.stringify({
              //                 sessionName: 'Day 4',
              //                 exercises: [
              //                   {
              //                     exerciseName: 'Snatch Grip Deficit Deadlifts',
              //                     sets: 4,
              //                     reps: 5,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Snatch Grip Press BTN',
              //                     sets: 3,
              //                     reps: 15,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Seated Good Mornings',
              //                     sets: 3,
              //                     reps: 10,
              //                     percent: '85%'
              //                   },
              //                   {
              //                     exerciseName: 'Lu Raises',
              //                     sets: 3,
              //                     reps: 10,
              //                     percent: '85%'
              //                   },
              //                 ]
              //               }),
              //               JSON.stringify({
              //                 sessionName: 'Day 5',
              //                 exercises: [
              //                   {
              //                     exerciseName: 'Hang Power Clean & Jerk',
              //                     sets: 4,
              //                     reps: 5,
              //                     percent: '85%'
              //                   },
              //                   {
              //                     exerciseName: 'Dumbbell Row',
              //                     sets: 3,
              //                     reps: 15,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Wide Grip Pullups',
              //                     sets: 3,
              //                     reps: 6,
              //                     percent: ''
              //                   },
              //                   {
              //                     exerciseName: 'Hanging Knee Raises',
              //                     sets: 3,
              //                     reps: 15,
              //                     percent: ''
              //                   },
              //                 ]
              //               }),
              //             ]
              //         }
              //       }
              //     });
              //     console.log('SUCCESS');
              //   } catch (error) {
              //     console.log('error', error);
              //   }
              // }}
            >Create Program</Typography>
          </Stack>
        </Button>
      </Grid>
      {programs?.map((programItem: any) => (
        <Grid item xs={12} sm={6}>
        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h6'>{programItem?.name}</Typography>
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
              {programItem?.program?.map((session: any, index: any) => (
                // TODO: setSelectedProgram in here 
                <ListItemButton key={index}
                  selected={selectedIndex === index}
                  onClick={(event) => {
                    handleListItemClick(event, index);
                    setSelectedSession(session);
                    setOpenSelectedSessionDialog(true);
                    // TODO:
                    // console.log('programItem: ');
                    // console.log(programItem?.name);
                    setSelectedProgram(programItem?.name);
                    // TODO - end
                  }}
                >
                  <ListItemText primary={session.sessionName} />
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Grid>
      ))}
      {/* <Grid item xs={12} sm={6}>
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
      </Grid> */}
    </Grid >
  );
};

export default ProgramsTab;