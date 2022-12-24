import React from "react";
import styles from "./BottomNavComponent.module.scss";
import Payment from "./Payment/Payment";
import Receive from "./Receive/Receive";
import Send from "./Send/Send";
import Loan from "./Loan/Loan";

const BottomNavComponent = () => {
  return (
    <div className={styles.BottomNavComponent}>
      <Payment />
      <Receive />
      <Send />
      <Loan />
    </div>
  );
};

export default BottomNavComponent;
