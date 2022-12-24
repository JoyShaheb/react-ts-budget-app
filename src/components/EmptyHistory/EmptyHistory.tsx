import React from "react";
import empty from "../../assets/empty.svg";
import { Stack, Typography } from "@mui/material";

const EmptyHistory = () => {
  return (
    <Stack direction="column" gap={1} alignItems="center">
      <Typography>No transaction done</Typography>
      <img src={empty} alt="" />
    </Stack>
  );
};

export default EmptyHistory;
