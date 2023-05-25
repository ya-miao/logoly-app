import { useState } from "react";

import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, Fab, Grid, IconButton, Paper, Stack, Step, StepContent, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import { useTheme } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

// TODO: MUI imports
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
//

import ExerciseTracker from "./ExerciseTracker";

interface StartSessionDialogProps {
  isDarkMode: boolean;
  selectedSession: any;
  openStartSessionDialog: boolean;
  setOpenStartSessionDialog: (openStartSessionDialog: boolean) => void;
}

const StartSessionDialog = ({ isDarkMode, selectedSession, openStartSessionDialog, setOpenStartSessionDialog }: StartSessionDialogProps) => {

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  // const [activeSet, setActiveSet] = useState(0);
  const [activeStepSet, setActiveStepSet] = useState(0);

  const [isCurrentComplete, setIsCurrentComplete] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
    setActiveStepSet(0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
    setActiveStepSet(sessionExercises[activeStep - 1]?.sets);
  };

  // const handleNextSet = () => {
  //   setActiveSet((prevActiveSet: any) => prevActiveSet + 1);
  // };

  // const handleBackSet = () => {
  //   setActiveSet((prevActiveSet: any) => prevActiveSet - 1);
  // };

  // const sessionSteps = [
  //   {
  //     label: 'Select campaign settings',
  //     description: `For each ad campaign that you create, you can control how much
  //               you're willing to spend on clicks and conversions, which networks
  //               and geographical locations you want your ads to show on, and more.`,
  //   },
  //   {
  //     label: 'Create an ad group',
  //     description:
  //       'An ad group contains one or more ads which target a shared set of keywords.',
  //   },
  //   {
  //     label: 'Create an ad',
  //     description: `Try out different ad text to see what brings in the most customers,
  //               and learn how to enhance your ads using features like ad extensions.
  //               If you run into any problems with your ads, find out how to tell if
  //               they're running and how to resolve approval issues.`,
  //   },
  // ];

  console.log('selectedSession?.exercises: ');
  console.log(selectedSession?.exercises);
  console.log(selectedSession?.exercises?.map((exercise: any) => {
    return (
      exercise
      // {
      //   'label': exercise?.exerciseName,
      //   'description': exercise?.percent,
      // }
    );
    // return
    //   ({ 
    //     'label': exercise?.exerciseName,
    //     'description': exercise?.percent,
    //   });
  }));

  const handleCloseStartSessionDialog = () => {
    setOpenStartSessionDialog(false);
    // TODO: Add confirm if want to end session here
  };

  console.log('selectedSession');
  console.log(selectedSession);

  const sessionExercises = selectedSession?.exercises || [];

  return (
    <Dialog fullScreen open={openStartSessionDialog} onClose={handleCloseStartSessionDialog}>
      <DialogTitle>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h6'>{selectedSession?.sessionName}</Typography>
          <IconButton onClick={() => {
            setOpenStartSessionDialog(false);
          }}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {/* <Divider sx={{ mt: 2 }} /> */}
        <Divider />
        <MobileStepper
          // variant="progress"
          // variant="dots"
          variant="text"
          steps={sessionExercises?.length}
          position="static"
          activeStep={activeStep}
          sx={{ flexGrow: 1, bgcolor: isDarkMode ? 'transparent' : 'transparent' }}
          nextButton={
            <Fab size='small' color={isDarkMode ? 'secondary' : 'primary'} onClick={handleNext}
              disabled={ !isCurrentComplete || activeStep === (sessionExercises?.length === 0 ? 0 : sessionExercises?.length - 1)}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Fab>
          }
          backButton={
            <Fab size='small' color={isDarkMode ? 'secondary' : 'primary'} onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Fab>
          }
        />
        <Divider sx={{ mb: 2 }} />
        <Stack alignItems='center' justifyContent='center'>
          <Typography variant='overline'>Current Exercise</Typography>
          <Typography variant='h6'>{sessionExercises ? sessionExercises[activeStep]?.exerciseName : ''}</Typography>
        </Stack>
        <Divider sx={{ mt: 2.5 }} />
        <Box sx={{ height: '50vh' }}>
          <ExerciseTracker isDarkMode={isDarkMode} currentExercise={sessionExercises[activeStep]} activeStepSet={activeStepSet} setActiveStepSet={setActiveStepSet} isCurrentComplete={isCurrentComplete} setIsCurrentComplete={setIsCurrentComplete} />
        </Box>
      </DialogContent>
    </Dialog >
  )
};

export default StartSessionDialog;