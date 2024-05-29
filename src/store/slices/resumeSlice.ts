import { createSlice } from "@reduxjs/toolkit";
import {
  defaultPersonalDetail,
  type PersonalDetailState,
} from "./personalDetailSlice";
import type { ExperienceState } from "./experienceSlice";
interface IResumeState {
  personalInfo: PersonalDetailState;
  experience: ExperienceState[];
}
const initialState: IResumeState = {
  personalInfo: defaultPersonalDetail,
  experience: [],
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    addWorkInfo: (state, action) => {
      state.experience = action.payload;
    },
  },
});
export const { addPersonalInfo, addWorkInfo } = resumeSlice.actions;
export const resumeReducer = resumeSlice.reducer;
