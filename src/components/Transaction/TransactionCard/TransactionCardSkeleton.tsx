import React from "react";
import { Skeleton, Stack } from "@mui/material";

const TransactionCardSkeleton = () => {
  return (
    <Stack gap={1.4} my={0.5}>
      <Skeleton animation="wave" variant="rounded" width="100%" height={20} />
      <Skeleton animation="wave" variant="rounded" width="100%" height={20} />
      <Skeleton animation="wave" variant="rounded" width="100%" height={3} />
    </Stack>
  );
};

export default TransactionCardSkeleton;
