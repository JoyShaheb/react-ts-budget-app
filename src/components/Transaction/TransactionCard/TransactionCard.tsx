import { Divider, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

interface iTransactionCard {
  label: string;
  transID: string;
  date: string;
  amount: number;
}

const TransactionCard: FC<iTransactionCard> = ({
  amount,
  date,
  label,
  transID,
}) => {
  return (
    <Stack direction="column">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body2">{label}</Typography>
        <Typography variant="caption" color="text.secondary">
          {date}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="text.secondary" variant="caption">
          Trans ID : {transID}
        </Typography>
        <Typography>$ {amount}</Typography>
      </Stack>
      <Divider sx={{ my: 0.7 }} />
    </Stack>
  );
};

export default TransactionCard;