import React from "react";
import styles from "./App.module.scss";
import UserDisplay from "./components/UserDisplay/UserDisplay";
import { Stack } from "@mui/material";
import portrait from "./assets/portrait.png";
import BottomNavComponent from "./components/BottomNavComponent";
import Balance from "./components/Balance/Balance";
import EmptyHistory from "./components/EmptyHistory/EmptyHistory";
import Transaction from "./components/Transaction";
import { useGetTransactionsQuery } from "./store";

const App = () => {
  // @ts-ignore
  const { data, error, isLoading } = useGetTransactionsQuery();

  return (
    <Stack className={styles.App}>
      <UserDisplay image={portrait} name="Jane Anderson" data={data} error={error} isLoading={isLoading}/>
      <Balance data={data} error={error} isLoading={isLoading}/>
      <Transaction data={data} error={error} isLoading={isLoading}/>
      {/* <EmptyHistory /> */}
      <BottomNavComponent />
    </Stack>
  );
};

export default App;
