import { createSlice } from "@reduxjs/toolkit";
export interface ISummaryState {
  jobDescription: string;
  summary: string;
  "#exp": string;
}
export const defaultSumamry =
  "Results-driven Application Development Analyst with a proven track record in delivering high-impact solutions for employee portals and microsites. Skilled in end-to-end development, UI/UX design, and integration, I excel in creating user-centric experiences that drive engagement and efficiency. With expertise in React, authentication systems like OKTA, and a strong commitment to quality, I am well-prepared to contribute to the development of innovative applications at Grocery and Everyday Essential Tech team.";
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
