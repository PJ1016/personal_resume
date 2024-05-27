import { createSlice } from "@reduxjs/toolkit";
export interface ISummaryState {
  primarySkill: string;
  summary: string;
  "#exp": string;
}
export const defaultSumamry =
  "Experienced React Developer specializing in high-performance web applications with React and Redux. Skilled in complex UI design, performance optimization, client interaction, team collaboration, and project contribution for multiple clients. Committed to innovation and user-friendly solutions.";

export const initialState: ISummaryState = {
  summary: defaultSumamry,
  primarySkill: "",
  "#exp": "",
};
const summarySlice = createSlice({
  name: "summary",
  initialState: {
    summary: initialState,
  },
  reducers: {
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const summaryReducer = summarySlice.reducer;
export const { setSummary } = summarySlice.actions;
