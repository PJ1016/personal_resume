import { createSlice } from "@reduxjs/toolkit";
export interface ISummaryState {
  primarySkill: string;
  summary: string;
  "#exp": string;
}
export const defaultSumamry =
  "Praveen Jayanth, a seasoned React developer, adeptly crafts robust, user-centric web applications. Proficient in harnessing React's power, he brings creativity and precision to frontend development, ensuring seamless user experiences. With a keen eye for detail and a passion for innovation, Praveen collaborates effectively in dynamic teams, driving projects from conception to execution. Dedicated to staying abreast of emerging technologies, he continuously refines his skills to deliver cutting-edge solutions that exceed expectations.";

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
      console.log(action.payload);
      state.summary = action.payload;
    },
  },
});

export const summaryReducer = summarySlice.reducer;
export const { setSummary } = summarySlice.actions;
