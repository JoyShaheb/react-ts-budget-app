import { FC } from "react";
import { Stack, Typography } from "@mui/material";

interface iBottomNavButton {
  label: string;
  icon: JSX.Element | JSX.Element[];
}

const BottomNavButton: FC<iBottomNavButton> = ({ icon, label }) => {
  return (
    <Stack gap={0} direction="column" alignItems="center" sx={{ cursor: "pointer" }}>
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Stack>
  );
};

export default BottomNavButton;
