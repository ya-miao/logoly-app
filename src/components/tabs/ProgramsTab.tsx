import { Accordion, AccordionSummary, AccordionDetails, Button, Grid, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProgramsTabProps {
  isDarkMode: boolean;
  handleListItemClick: any;
  selectedIndex: any;
  setSelectedSession: any;
  setOpenSelectedSessionDialog: any;
  setOpenCreateSessionDialog: any;
  // TODO: Temporary data
  dummyData: any;
  dummyData0: any;
  // TODO - end
};

const ProgramsTab = ({ isDarkMode, selectedIndex, handleListItemClick, setSelectedSession, setOpenSelectedSessionDialog, setOpenCreateSessionDialog, dummyData, dummyData0 }: ProgramsTabProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant='outlined' fullWidth color={isDarkMode ? 'secondary' : 'primary'} sx={{ textTransform: 'none' }}>
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
  );
};

export default ProgramsTab;