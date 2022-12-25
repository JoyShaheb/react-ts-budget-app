import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import styles from "./UserDisplay.module.scss";
import dayjs from "dayjs";
import TransactionCardSkeleton from "../Transaction/TransactionCard/TransactionCardSkeleton";

interface iUserDisplayProps {
  image: string;
  name: string;
  data: any;
  error: any;
  isLoading: boolean;
}

const UserDisplay: FC<iUserDisplayProps> = ({
  image,
  name,
  data,
  error,
  isLoading,
}) => {
  return (
    <>
      {isLoading && <TransactionCardSkeleton />}

      {!isLoading && !error && data && (
        <Stack direction="row" gap={2} alignItems="center">
          <img className={styles.image} src={image} alt={name} />
          <Stack>
            <Typography variant="caption" color="text.secondary">
              {dayjs().format("dddd, D MMMM")}
            </Typography>
            <Typography>{name}</Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default UserDisplay;
