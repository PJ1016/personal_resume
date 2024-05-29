import { createSlice } from "@reduxjs/toolkit";
import {
  defaultPersonalDetail,
  type PersonalDetailState,
} from "./personalDetailSlice";
interface IResumeState {
  personalInfo: PersonalDetailState;
}
const initialState: IResumeState = {
  personalInfo: defaultPersonalDetail,
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
  },
});
export const { addPersonalInfo } = resumeSlice.actions;
export const resumeReducer = resumeSlice.reducer;
