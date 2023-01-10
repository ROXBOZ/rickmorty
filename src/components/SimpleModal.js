import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";

const SimpleModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography variant="h2">Text in a modal</Typography>
          <Typography>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SimpleModal;
