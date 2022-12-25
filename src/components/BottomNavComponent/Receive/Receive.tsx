import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BottomNavButton from "../BottomNavButton/BottomNavButton";
import BaseModal from "../../Modal/BaseModal";
import { usePostTransactionMutation } from "../../../store";
import { useForm } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import dayjs from "dayjs";

const Receive = () => {
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
      title="Receive Money"
      setState={setModalState}
      isLoading={postTransactionResult.isLoading}
      state={modalState}
      label={
        <BottomNavButton
          icon={<CreditCardIcon fontSize="small" />}
          label="Receive"
        />
      }
      onClose={() => console.log("the modal has been closed")}
      onSave={() => {
        if (watch("label") === "" || watch("amount") === "") return;
        postTransaction({
          id: nanoid(10),
          reason: "Receive Money",
          label: watch("label"),
          amount: +watch("amount"),
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack className="" mb={2} gap={1}>
        <TextField
          error={errors.label ? true : false}
          id="standard-basic"
          label="From"
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

export default Receive;
