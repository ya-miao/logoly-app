import { useState } from "react";

import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, Fab, Grid, IconButton, Paper, Stack, Step, StepContent, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import { useTheme } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

// TODO: MUI imports
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
//

import ExerciseTracker from "../ExerciseTracker";

interface StartSessionDialogProps {
  isDarkMode: boolean;
  openSingleSessionDialog: boolean;
  setOpenSingleSessionDialog: (openSingleSessionDialog: boolean) => void;
}

const StartSessionDialog = ({ isDarkMode, openSingleSessionDialog, setOpenSingleSessionDialog }: StartSessionDialogProps) => {

  const theme = useTheme();

  // const [activeStep, setActiveStep] = useState(0);
  // const [activeSet, setActiveSet] = useState(0);
  // const [activeStepSet, setActiveStepSet] = useState(0);

  const [isCurrentComplete, setIsCurrentComplete] = useState(false);

  const handleNext = () => {
    // setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
    // setActiveStepSet(0);
  };

  const handleBack = () => {
    // setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
    // setActiveStepSet(sessionExercises[activeStep - 1]?.sets);
  };

  const handleCloseStartSessionDialog = () => {
    setOpenSingleSessionDialog(false);
    // TODO: Add confirm if want to end session here
  };

  return (
    <Dialog fullScreen open={openSingleSessionDialog} onClose={handleCloseStartSessionDialog}>
      <DialogTitle>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h6'>Single Session Mode</Typography>
          <IconButton onClick={() => {
            setOpenSingleSessionDialog(false);
          }}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Typography>
          Create and start a single workout session, independent of stored structured programs.
        </Typography>
        <Divider />
      </DialogContent>
    </Dialog >
  )
};

export default StartSessionDialog;