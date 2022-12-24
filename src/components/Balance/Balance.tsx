import React from "react";
import { Stack, Typography } from "@mui/material";

const Balance = () => {
  return (
    <Stack my={2} direction="column" alignItems="center">
      <Typography color="text.secondary" variant="body2">
        Current Balance
      </Typography>
      <Typography variant="h6">$ 330</Typography>
    </Stack>
  );
};

export default Balance;
