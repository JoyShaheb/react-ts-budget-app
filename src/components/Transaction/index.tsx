import React, { useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import TransactionCard from "./TransactionCard/TransactionCard";
import BaseModal from "../Modal/BaseModal";
import { useGetTransactionsQuery } from "../../store";
import { iTransaction } from "../../types";
import TransactionCardSkeleton from "./TransactionCard/TransactionCardSkeleton";
import ErrorPage from "../ErrorPage/ErrorPage";

const Transaction = () => {
  // @ts-ignore
  const { data, error, isLoading } = useGetTransactionsQuery();
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <Stack>
      {isLoading || error ? (
        ""
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={1}
        >
          <Typography>Transaction</Typography>

          <BaseModal
            state={modalState}
            setState={setModalState}
            title="All Transactions"
            label={
              <Button size="small" variant="text">
                View All
              </Button>
            }
            onClose={() => console.log("the modal has been closed")}
          >
            <div className="sdc">
              {isLoading &&
                Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <TransactionCardSkeleton key={uuidv4()} />
                  ))}
              {error && <ErrorPage />}
              {data?.map((transaction: iTransaction) => (
                <TransactionCard {...transaction} key={uuidv4()} />
              ))}
            </div>
          </BaseModal>
        </Stack>
      )}
      <>
        {isLoading &&
          Array(3)
            .fill(0)
            .map((_, index) => <TransactionCardSkeleton key={uuidv4()} />)}

        {error && <ErrorPage />}

        {data?.map((transaction: iTransaction) => (
          <TransactionCard {...transaction} key={uuidv4()} />
        ))}
      </>
    </Stack>
  );
};

export default Transaction;
