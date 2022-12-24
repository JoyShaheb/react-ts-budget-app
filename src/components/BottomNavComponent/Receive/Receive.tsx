import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BottomNavButton from "../BottomNavButton/BottomNavButton";

const Receive = () => {
  return (
    <BottomNavButton icon={<CreditCardIcon fontSize="small" />} label="Receive" />
  );
};

export default Receive;
