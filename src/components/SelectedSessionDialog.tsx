import { useState } from "react";

import { Button, Dialog, DialogContent, DialogTitle, Divider, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import StartSessionDialog from "./StartSessionDialog";

interface SelectedSessionDialogProps {
  isDarkMode: boolean;
  selectedSession: any;
  selectedProgram: any;
  openSelectedSessionDialog: boolean;
  setOpenSelectedSessionDialog: (openSelectedSessionDialog: boolean) => void;
}

const SelectedSessionDialog = ({ isDarkMode, selectedSession, selectedProgram, openSelectedSessionDialog, setOpenSelectedSessionDialog }: SelectedSessionDialogProps) => {

  const [openStartSessionDialog, setOpenStartSessionDialog] = useState(false)

  const handleCloseSelectedSessionDialog = () => {
    setOpenSelectedSessionDialog(false);
    // setSelectedSession({});
  };

  console.log('selectedSession');
  console.log(selectedSession);
  // console.log(selectedSession?.map((item: any) => item));

  return (
    <>
      {/* <Dialog fullWidth open={openSelectedSessionDialog} onClose={handleCloseSelectedSessionDialog}> */}
      <Dialog fullScreen open={openSelectedSessionDialog} onClose={handleCloseSelectedSessionDialog} sx={{ m: 2 }}>
        {/* <Dialog open={openSelectedSessionDialog} onClose={handleCloseSelectedSessionDialog} sx={{ m: 4 }}> */}
        <DialogTitle>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography variant='h6'>{selectedProgram}</Typography>
            <IconButton onClick={handleCloseSelectedSessionDialog}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Stack alignItems='center' justifyContent='center'>
            <Typography variant='overline' sx={{ mb: 0.5 }}>{selectedSession?.sessionName}</Typography>
          </Stack>
          <Stack spacing={2} alignItems='center' justifyContent='center'>
            <Button variant='contained' fullWidth color={isDarkMode ? 'secondary' : 'primary'}
              onClick={() => {
                // setOpenSelectedSessionDialog(false);
                setOpenStartSessionDialog(true);
              }}
            >
              Start Session
            </Button>
            <TableContainer component={Paper}>
              {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
              <Table size='small' align='center'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>
                      <Typography variant='overline'>
                        Exercise
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography variant='overline'>
                        Sets
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography variant='overline'>
                        Reps
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography variant='overline'>
                        %
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedSession?.exercises?.map((exercise: any) => (
                    <TableRow
                      key={exercise.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align='center'>
                        {exercise?.exerciseName}
                      </TableCell>
                      <TableCell align='center'>{exercise?.sets}</TableCell>
                      <TableCell align='center'>{exercise?.reps}</TableCell>
                      <TableCell align='center'>{exercise?.percent}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
          <Divider sx={{ mt: 2, mb: 0.5 }} />
          <Stack alignItems='center' justifyContent='center' spacing={0.5}>
            <Typography variant='overline'>Program Notes</Typography>
            <TextField variant='outlined' fullWidth multiline rows={4} />
          </Stack>
        </DialogContent>
      </Dialog>
      <StartSessionDialog isDarkMode={isDarkMode} selectedSession={selectedSession} openStartSessionDialog={openStartSessionDialog} setOpenStartSessionDialog={setOpenStartSessionDialog} />
    </>
  )
};

export default SelectedSessionDialog;