import React, { Dispatch, FC, SetStateAction, FormEvent } from "react";
import { Button, Modal, Stack, Typography } from "@mui/material";

interface iBaseModal {
  title: string;
  children: React.ReactElement;
  label: string | JSX.Element | JSX.Element[];
  onSave?: () => void;
  onClose?: () => void;
  isLoading?: boolean;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  onSubmit?: () => void;
}

const BaseModal: FC<iBaseModal> = ({
  children,
  onClose,
  onSave,
  label,
  title,
  isLoading,
  state,
  setState,
  onSubmit,
}) => {
  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div onClick={handleOpen}>{label}</div>
      <Modal
        open={state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        component="form"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          if (onSubmit) onSubmit();
        }}
        role="form"
      >
        <Stack sx={style}>
          <Typography variant="h5" mb={1.8}>
            {title}
          </Typography>
          {children}
          <Stack direction="row" justifyContent="end">
            {onClose && (
              <Button
                onClick={() => {
                  onClose();
                  handleClose();
                }}
              >
                Close
              </Button>
            )}
            {onSave && (
              <Button type="submit" onClick={onSave}>
                {isLoading ? "Proceeding..." : "Proceed"}
              </Button>
            )}
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default BaseModal;
