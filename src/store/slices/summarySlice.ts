import { createSlice } from "@reduxjs/toolkit";
export interface ISummaryState {
  jobDescription: string;
  summary: string;
  "#exp": string;
}
export const defaultSumamry =
  "Full-Stack Engineer with 4+ years of experience building and maintaining enterprise web applications using React, TypeScript, and ASP.NET Core. Strong frontend expertise in UI architecture, state management, performance optimization, accessibility, and testing, with hands-on experience handling scoped backend tickets in ASP.NET Core. Proven experience integrating secure authentication using MSAL, working with REST and GraphQL APIs, and collaborating across frontend and backend teams to deliver reliable, scalable features.";
export const initialState: ISummaryState = {
  summary: defaultSumamry,
  jobDescription: "",
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
