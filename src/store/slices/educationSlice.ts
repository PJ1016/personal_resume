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
    collegeName: "Rajiv Gandhi University of Knowledge and Technologies",
    city: "Basar, Telangana",
    course: "Computer Science and Engineering",
    startDate: "Jun 2017",
    endDate: "Aug 2021",
    additionalContent: "",
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
