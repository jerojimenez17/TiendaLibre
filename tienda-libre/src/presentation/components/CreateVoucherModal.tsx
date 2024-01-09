import {
  Backdrop,
  Box,
  Divider,
  Dialog,
  Paper,
  TextField,
  DialogContent,
  FormControl,
} from "@mui/material";
import React from "react";
interface ModalProps {
  open: boolean;
  handleClose: (value: React.SetStateAction<boolean>) => void;
}

export default function CreateVoucherModal({ open, handleClose }: ModalProps) {
  return (
    <div>
      <Dialog
        scroll={"paper"}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Paper>
          <DialogContent>
            <Box>
              <FormControl>
                <TextField />
              </FormControl>
            </Box>
            <Divider />
          </DialogContent>
        </Paper>
      </Dialog>
    </div>
  );
}
