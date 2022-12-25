import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { iTransaction } from "../../types";
import TransactionCardSkeleton from "../Transaction/TransactionCard/TransactionCardSkeleton";

interface iBalanceProps {
  data: iTransaction[];
  error: any;
  isLoading: boolean;
}

const Balance: FC<iBalanceProps> = ({ data, error, isLoading }) => {
  const calculateBalance =
    !isLoading &&
    !error &&
    data
      .map((item: iTransaction) => item.amount)
      .reduce((a: number, b: number) => a + b, 0);

  return (
    <>
      {isLoading && (
        <Stack my={2}>
          <TransactionCardSkeleton />
        </Stack>
      )}

      {!isLoading && data && !error && (
        <Stack my={2} direction="column" alignItems="center">
          <Typography color="text.secondary" variant="body2">
            Current Balance
          </Typography>
          <Typography variant="h6">$ {calculateBalance}</Typography>
        </Stack>
      )}

      {error && (
        <Typography textAlign="center" mt={4}>
          Something went wrong
        </Typography>
      )}
    </>
  );
};

export default Balance;
