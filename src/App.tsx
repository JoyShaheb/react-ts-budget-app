import React from "react";
import styles from "./App.module.scss";
import UserDisplay from "./components/UserDisplay/UserDisplay";
import { Stack } from "@mui/material";
import portrait from "./assets/portrait.png";
import BottomNavComponent from "./components/BottomNavComponent";
import Balance from "./components/Balance/Balance";
import EmptyHistory from "./components/EmptyHistory/EmptyHistory";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <Stack className={styles.App}>
      <UserDisplay image={portrait} name="Jane Anderson" />
      <Balance />
      <Transaction/>
      {/* <EmptyHistory /> */}
      <BottomNavComponent />
    </Stack>
  );
};

export default App;
