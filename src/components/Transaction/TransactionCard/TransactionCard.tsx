import { Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { iTransaction } from "../../../types";

const TransactionCard: FC<iTransaction> = ({
  amount,
  date,
  label,
  id,
  color
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
          Trans ID : {id}
        </Typography>
        <Typography className={color}>$ {amount}</Typography>
      </Stack>
      <Divider sx={{ my: 0.7 }} />
    </Stack>
  );
};

export default TransactionCard;
