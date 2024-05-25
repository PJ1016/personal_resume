import { createSlice } from "@reduxjs/toolkit";
export interface IEducationState {
  id: string;
  collegeName: string;
  city: string;
  course: string;
  startDate: string;
  endDate: string;
  additionalContent?: string;
}
export const initialState: IEducationState[] = [
  {
    id: "123",
    collegeName:
      "University of Cincinnati, Carl H. Lindner College of Business",
    city: "Cincinnati, Ohio",
    course: "Master of Science, Business Analytics",
    startDate: "August 2021",
    endDate: "August 2023",
  },
];
const educationSlice = createSlice({
  name: "educationState",
  initialState: {
    education: initialState,
  },
  reducers: {
    setEducation: (state, action) => {
      state.education = action.payload;
    },
  },
});

export const educationReducer = educationSlice.reducer;
export const { setEducation } = educationSlice.actions;
