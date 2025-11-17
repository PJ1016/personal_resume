import { createSlice } from "@reduxjs/toolkit";
export interface ISummaryState {
  jobDescription: string;
  summary: string;
  "#exp": string;
}
export const defaultSumamry =
  "Senior Frontend Engineer with nearly 4 years of experience architecting scalable, high-performance React applications used by 10,000+ enterprise users. Specialized in UI architecture, performance tuning, accessibility (WCAG 2.1), reusable component systems, and React + TypeScript best practices. Proven track record improving performance by 20–40%, reducing defects by 15–20%, and accelerating developer productivity through standardized UI patterns and code quality improvements. Experienced across enterprise platforms, GraphQL integrations, cloud pipelines, and secure authentication workflows.";
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
