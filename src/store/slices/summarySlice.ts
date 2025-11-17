import { createSlice } from "@reduxjs/toolkit";
export interface ISummaryState {
  jobDescription: string;
  summary: string;
  "#exp": string;
}
export const defaultSumamry =
  "Results-driven Frontend Engineer with 4+ years of experience building scalable, high-performance React applications. Specialized in UI architecture, performance optimization, and modern JavaScript/TypeScript development. Proven ability to deliver responsive, accessible interfaces that improve business outcomes and user experience at enterprise scale.";
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
