import React, { useState } from "react";
import Button from "../../../style/Button.style";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteChili } from "../../../redux/actions/chiliSecondActions";

const trashIcon = <FontAwesomeIcon icon={faTrash} size="4x" color="black" />;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const DeleteModal = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  function handleDelete() {
    debugger;
    dispatch(deleteChili(id))
      .then(() => {
        handleClose();
        navigate("/shop", { replace: true });
        toast.success("Chili deleted.");
      })
      .catch((error) => {
        toast.error("Delete failed" + error.message, { autoClose: false });
      });
  }

  return (
    <section>
      <Button variant="text" onClick={handleOpen}>
        {trashIcon}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            With hands high fists fill the air. Do you stand by your deletion,
            brother?
          </Typography>
          <Button backgroundColor="green" onClick={handleClose}>
            No
          </Button>
          <Button backgroundColor="red" onClick={handleDelete}>
            Yes
          </Button>
        </Box>
      </Modal>
    </section>
  );
};

export default DeleteModal;
