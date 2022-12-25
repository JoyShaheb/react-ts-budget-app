import { useState, FC } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import TransactionCard from "./TransactionCard/TransactionCard";
import BaseModal from "../Modal/BaseModal";
import TransactionCardSkeleton from "./TransactionCard/TransactionCardSkeleton";
import ErrorPage from "../ErrorPage/ErrorPage";
import { iTransaction } from "../../types";
import EmptyHistory from "../EmptyHistory/EmptyHistory";

interface iTransactionProps {
  data: iTransaction[];
  error: any;
  isLoading: boolean;
}

const Transaction: FC<iTransactionProps> = ({ data, error, isLoading }) => {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <Stack>
      {!isLoading && !error && data?.length !== 0 && (
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
                !error &&
                Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <TransactionCardSkeleton key={uuidv4()} />
                  ))}
              {error && <ErrorPage />}
              {!isLoading &&
                !error &&
                Array?.from(data)
                  ?.reverse()
                  ?.map((transaction: any) => (
                    <TransactionCard {...transaction} key={uuidv4()} />
                  ))}
            </div>
          </BaseModal>
        </Stack>
      )}
      {isLoading &&
        !error &&
        Array(3)
          .fill(0)
          .map((_, index) => <TransactionCardSkeleton key={uuidv4()} />)}

      {error && <ErrorPage />}

      {!isLoading &&
        !error &&
        Array?.from(data)
          ?.reverse()
          ?.filter((item: any, index: number) => index < 5)
          ?.map((transaction: any) => (
            <TransactionCard {...transaction} key={uuidv4()} />
          ))}

      {!isLoading && !error && data?.length === 0 && <EmptyHistory />}
    </Stack>
  );
};

export default Transaction;
