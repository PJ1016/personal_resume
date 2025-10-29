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
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import { Controller, type UseFormReturn } from "react-hook-form";
import { GenerativeModel } from "@google/generative-ai";
import type { ISummaryState } from "../../store/slices/summarySlice";
import ReactQuill from "react-quill";

interface ISummaryDetailsModal {
  open: boolean;
  handleClose: () => void;
  onSubmit: any;
  summaryFormHook: UseFormReturn<ISummaryState, any, undefined>;
}

const SummaryDetailsModal = ({
  open,
  handleClose,
  onSubmit,
  summaryFormHook,
}: ISummaryDetailsModal) => {
  const { register, watch, setValue, control } = summaryFormHook;

  const [isLoading, setIsLoading] = useState<boolean>();
  const geminiSecretKey = process.env.REACT_APP_GEMINI_SECRET_KEY;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const client = new GenerativeModel(geminiSecretKey as string, {
      model: "gemini-2.5-pro",
    });
    try {
      setIsLoading(true);
      const result = await client.generateContent(
        `Can you generate a summary for a resume tailored to the job description of ${watch("jobDescription") || "react role"}? Please format the summary as a concise paragraph, focusing on the candidate's ${watch("#exp") || 3}-year experience and suitability for the role`
      );
      setValue(
        "summary",
        (result.response.candidates &&
          result.response.candidates[0].content.parts[0].text) as string
      );
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Get Summary Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter all the fields below</DialogContentText>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("jobDescription")}
                label="Job Description"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("#exp", {})}
                label="Years of experience"
                multiline
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Controller
                name="summary"
                control={control}
                render={({ field: { value, onChange } }: any) => (
                  <ReactQuill
                    theme="snow"
                    value={value}
                    preserveWhitespace
                    onChange={(value) => onChange(value)}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <LoadingButton
                size="small"
                onClick={handleSubmit}
                loading={isLoading}
                variant="contained"
              >
                Generate Summary
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={onSubmit}>
          Update Summary
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SummaryDetailsModal;
