import React from "react";
import BottomNavButton from "../BottomNavButton/BottomNavButton";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Loan = () => {
  return (
    <BottomNavButton
      icon={<AccountBalanceIcon fontSize="small" />}
      label="Loan"
    />
  );
};

export default Loan;
