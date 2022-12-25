import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import BottomNavButton from "../BottomNavButton/BottomNavButton";
import SendIcon from "@mui/icons-material/Send";
import BaseModal from "../../Modal/BaseModal";
import { usePostTransactionMutation } from "../../../store";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";


const Send = () => {
  const [postTransaction, postTransactionResult] = usePostTransactionMutation();
  const [modalState, setModalState] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <BaseModal
      title="Send Money"
      isLoading={postTransactionResult.isLoading}
      label={
        <BottomNavButton icon={<SendIcon fontSize="small" />} label="Send" />
      }
      onClose={() => console.log("the modal has been closed")}
      onSave={() => {
        if (watch("label") === "" || watch("amount") === "") return;
        postTransaction({
          id: nanoid(10),
          reason: "make payment",
          label: watch("label"),
          amount: +-watch("amount"),
          date: dayjs().format("hh:mm A MM/DD/YY"),
          color: "red",
        })
          .unwrap()
          .catch(() => setModalState(true))
          .finally(() => {
            setModalState(false);
            reset();
          });
      }}
      state={modalState}
      setState={setModalState}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack className="" mb={2} gap={1}>
        <TextField
          error={errors.label ? true : false}
          id="standard-basic"
          label="Send to"
          variant="standard"
          {...register("label", { required: true })}
          helperText={errors.label ? "Please fill in the blank" : ""}
        />
        <TextField
          error={errors.amount ? true : false}
          type="number"
          id="standard-basic"
          label="Amount"
          variant="standard"
          {...register("amount", { required: true })}
          helperText={errors.amount ? "Please fill in the blank" : ""}
        />
      </Stack>
    </BaseModal>
  );
};

export default Send;
