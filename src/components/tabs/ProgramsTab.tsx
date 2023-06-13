import { Accordion, AccordionSummary, AccordionDetails, Button, Grid, List, ListItem, ListItemButton, ListItemText, Stack, Tooltip, Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
          <Button variant='outlined' fullWidth color={isDarkMode ? 'secondary' : 'primary'} sx={{ textTransform: 'none' }}>
            <Stack width='100%' direction='row' spacing={1} alignItems='center' justifyContent='center'>
              {/* <PlayArrowIcon /> */}
              <Typography variant='h6'
                onClick={() => {
                  console.log('Single Session Mode')
                }}
              >Single Session Mode</Typography>
            </Stack>
          </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' fullWidth color={isDarkMode ? 'secondary' : 'primary'} sx={{ textTransform: 'none' }}>
          <Stack width='100%' direction='row' spacing={0.8} alignItems='center' justifyContent='center'>
            <AddIcon />
            <Typography variant='h6'
              onClick={() => {
                console.log('Create Program!')
              }}
            >New Program</Typography>
          </Stack>
        </Button>
      </Grid>
      {programs?.map((programItem: any) => (
        <Grid item xs={12} sm={6}>
          <Accordion disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color='primary' />}
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