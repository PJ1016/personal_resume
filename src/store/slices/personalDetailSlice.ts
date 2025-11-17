import { createSlice } from "@reduxjs/toolkit";

export interface PersonalDetailState {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailAddress: string;
  address: string;
  linkedInAddress: string;
}
export const defaultPersonalDetail = {
  firstName: "Praveen Jayanth",
  lastName: "Kamatham",
  mobileNumber: "9494039564",
  emailAddress: "praveen.jayanth.1111@gmail.com",
  address: "",
  linkedInAddress: "https://www.linkedin.com/in/praveen-jayanth-8b0687199/",
};
export const personalDetailSlice = createSlice({
  name: "personalDetail",
  initialState: {
    personalDetail: defaultPersonalDetail,
  },
  reducers: {
    setPersonalDetail: (state, action) => {
      state.personalDetail = action.payload;
    },
  },
});
export const { setPersonalDetail } = personalDetailSlice.actions;
export const personalDetailReducer = personalDetailSlice.reducer;
