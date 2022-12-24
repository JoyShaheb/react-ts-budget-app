import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import styles from "./UserDisplay.module.scss";
import dayjs from "dayjs";

interface iUserDisplayProps {
  image: string;
  name: string;
}

const UserDisplay: FC<iUserDisplayProps> = ({ image, name }) => {
  return (
    <Stack direction="row" gap={2} alignItems="center">
      <img className={styles.image} src={image} alt={name} />
      <Stack>
        <Typography variant="caption" color="text.secondary">
          {dayjs().format("dddd, D MMMM")}
        </Typography>
        <Typography>{name}</Typography>
      </Stack>
    </Stack>
  );
};

export default UserDisplay;
