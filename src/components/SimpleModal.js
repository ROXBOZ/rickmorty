import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";

const SimpleModal = ({ data, d }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="secondary" variant="contained" onClick={handleOpen}>
        More Info
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <Button className="modal-box-closebutton" onClick={handleClose}>
            close &times;
          </Button>
          <Typography variant="h4" gutterBottom align="center">
            {data.name}
          </Typography>
          <img className="modal-box-img" src={data.image} alt={data.name} />
          <Typography align="center">Species: {data.species}</Typography>
          <Typography align="center">Status: {data.status}</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default SimpleModal;
