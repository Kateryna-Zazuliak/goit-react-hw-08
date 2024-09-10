import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const ModalWindow = ({ modalIsOpen, closeModal, onConfirm }) => {
  return (
    <Dialog open={modalIsOpen} onClose={closeModal}>
      <DialogTitle>{"Confirm Delete"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
