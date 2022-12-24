import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import TransactionCard from "./TransactionCard/TransactionCard";

const Transaction = () => {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography>Transaction</Typography>
        <Button variant="text" size="small">
          see all
        </Button>
      </Stack>
      <TransactionCard amount={10} date="sdc" label="sjhdbc" transID="shcb"/>
      <TransactionCard amount={10} date="sdc" label="sjhdbc" transID="shcb"/>
      <TransactionCard amount={10} date="sdc" label="sjhdbc" transID="shcb"/>
      <TransactionCard amount={10} date="sdc" label="sjhdbc" transID="shcb"/>
      <TransactionCard amount={10} date="sdc" label="sjhdbc" transID="shcb"/>
    </Stack>
  );
};

export default Transaction;
