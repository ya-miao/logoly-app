import { useEffect, useState } from 'react';

import { Box, Divider, Fab, IconButton, Stack, Stepper, TextField, Typography } from "@mui/material";

import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface ExerciseTrackerProps {
  isDarkMode: boolean;
  currentExercise: any;
  activeStepSet: any;
  setActiveStepSet: any;
  isCurrentComplete: boolean;
  setIsCurrentComplete: any;
};

const ExerciseTracker = ({ isDarkMode, currentExercise, activeStepSet, setActiveStepSet, isCurrentComplete, setIsCurrentComplete }: ExerciseTrackerProps) => {
  const theme = useTheme();


  const handleNext = () => {
    setActiveStepSet((prevActiveStep: any) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStepSet((prevActiveStep: any) => prevActiveStep - 1);
  };

  useEffect(() => {
    console.log('activeStepSet changed!')
    if (activeStepSet === currentExercise?.sets) {
      console.log('Current complete!');
      setIsCurrentComplete(true);
    } else {
      setIsCurrentComplete(false);
    };
  }, [activeStepSet])

  return (
    <Box sx={{ minWidth: '80%' }}>
      <MobileStepper
        variant="progress"
        // variant="text"
        // variant="dots"
        steps={currentExercise?.sets + 1}
        position="static"
        activeStep={activeStepSet}
        sx={{ flexGrow: 1, bgcolor: isDarkMode ? 'transparent' : 'transparent' }}
        nextButton={
          // <Fab size='small' color={isDarkMode ? 'secondary' : 'primary'} onClick={handleNext} disabled={activeStepSet === (sessionExercises?.length === 0 ? 0 : sessionExercises?.length - 1)}>
          // <IconButton size='small' color={isDarkMode ? 'secondary' : 'primary'} onClick={handleNext} disabled={activeStepSet === (currentExercise?.sets?.length === 0 ? 0 : currentExercise?.sets?.length)}>
          <IconButton size='small' color={isDarkMode ? 'secondary' : 'primary'} onClick={handleNext} disabled={activeStepSet === (currentExercise?.sets ? currentExercise?.sets : 0)}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        }
        backButton={
          <IconButton size='small' color={isDarkMode ? 'secondary' : 'primary'} onClick={handleBack} disabled={activeStepSet === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
        }
      />
      <Divider sx={{ mb: 2 }} />
      <Stack alignItems='center' justifyContent='center'>
        {activeStepSet === 0 ?
          <Stack alignItems='center' justifyContent='center' spacing={1.5}>
            <Typography variant='h6' fontFamily='Montserrat'>
              Warm Up Sets
            </Typography>
            <Typography variant='subtitle2'>
              Don't take too long with these.
            </Typography>
          </Stack>
          :
          <Stack alignItems='center' justifyContent='center' spacing={1.25}>
            <Stack direction='row' justifyContent='center' spacing={0.69}>
              <Typography variant='h6' fontFamily='Montserrat'>
                SET {activeStepSet}
              </Typography>
              <Typography variant='caption'>of {currentExercise?.sets}</Typography>
            </Stack>
            <Stack direction='row' justifyContent='center' spacing={0.69}>
              <Typography>
                {currentExercise?.reps} {currentExercise?.reps === 1 ? 'REP' : 'REPS'}
              </Typography>
              <Typography>at</Typography>
              <Typography>{currentExercise?.percent}</Typography>
            </Stack>
          </Stack>
        }
      </Stack>
      <Divider sx={{ mt: 2, mb: 1.5 }} />
      <Stack alignItems='center' justifyContent='center' spacing={1}>
        <Typography variant='overline'>Session Notes</Typography>
        <TextField variant='outlined' fullWidth multiline rows={4} />
      </Stack>
    </Box>
  );
};


{/* <Stepper activeStepSet={activeSet} orientation="vertical"> */ }
{/* {sessionExercises?.map((exercise: any, index: any) => (
        <Step key={index}>
          <StepLabel>
            {exercise?.exerciseName}, {exercise?.sets}x{exercise?.reps} at {exercise?.percent}
          </StepLabel>
          <StepContent>
            <Typography>{exercise?.sets}</Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNextSet}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === sessionExercises?.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBackSet}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      ))} */}
{/* </Stepper> */ }

export default ExerciseTracker;