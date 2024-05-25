import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import type { UseFormReturn } from "react-hook-form";
import type { PersonalDetailState } from "../../store/slices/personalDetailSlice";
interface IPersonalDetailsModal {
  open: boolean;
  handleClose: (close: boolean) => void;
  onSubmit: any;
  personalDetailHook: UseFormReturn<PersonalDetailState, any, undefined>;
}
const PersonalDetailsModal = ({
  open,
  handleClose,
  onSubmit,
  personalDetailHook,
}: IPersonalDetailsModal) => {
  const {
    register,
    formState: { errors },
  } = personalDetailHook;
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Update Personal Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter all the fields below</DialogContentText>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("firstName", {
                  required: { value: true, message: "First name is required" },
                })}
                label="First Name"
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("lastName", {
                  required: { value: true, message: "Last name is required" },
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
                label="Last Name"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("mobileNumber", {
                  required: {
                    value: true,
                    message: "Mobile number is required",
                  },
                })}
                error={Boolean(errors.mobileNumber)}
                helperText={errors.mobileNumber?.message}
                label="Phone Number"
                fullWidth
                type="tel"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("emailAddress", {
                  required: {
                    value: true,
                    message: "Email address is required",
                  },
                })}
                error={Boolean(errors.emailAddress)}
                helperText={errors.emailAddress?.message}
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("address", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
                label="City"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("linkedInAddress", {
                  required: {
                    value: true,
                    message: "LinkedIn Address is required",
                  },
                })}
                error={Boolean(errors.linkedInAddress)}
                helperText={errors.linkedInAddress?.message}
                label="LinkedIn Address"
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={onSubmit}>
          Update details
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PersonalDetailsModal;
