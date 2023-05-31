import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

interface CreateSessionDialogProps {
  openCreateSessionDialog: boolean;
  setOpenCreateSessionDialog: (openSessionDialog: boolean) => void;
}

const CreateSessionDialog = ({ openCreateSessionDialog, setOpenCreateSessionDialog }: CreateSessionDialogProps) => {

  const handleCloseCreateSessionDialog = (value: string) => {
    setOpenCreateSessionDialog(false);
  };

  return (
    <Dialog fullScreen open={openCreateSessionDialog} onClose={handleCloseCreateSessionDialog} sx={{ m: 4 }}>
      <DialogTitle>Create A New Session</DialogTitle>
      <DialogContent>
        <Typography>Here is some dialog content.</Typography>
        <Typography>Add fields here for creating a session.</Typography>
      </DialogContent>
    </Dialog>
  )
};

export default CreateSessionDialog;