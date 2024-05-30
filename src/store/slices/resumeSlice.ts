import { createSlice } from "@reduxjs/toolkit";
import {
  defaultPersonalDetail,
  type PersonalDetailState,
} from "./personalDetailSlice";
import {
  defaultExperienceState,
  type ExperienceState,
} from "./experienceSlice";
interface IResumeState {
  personalInfo: PersonalDetailState;
  experience: ExperienceState[];
}
const initialState: IResumeState = {
  personalInfo: defaultPersonalDetail,
  experience: defaultExperienceState,
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    addWorkInfo: (state, action) => {
      state.experience.push({ ...action.payload, id: Math.random() });
    },
    deleteWorkExperience: (state, action) => {
      state.experience = state.experience.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { addPersonalInfo, addWorkInfo, deleteWorkExperience } =
  resumeSlice.actions;
export const resumeReducer = resumeSlice.reducer;
