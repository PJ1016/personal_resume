import { createSlice } from "@reduxjs/toolkit";

export interface PersonalDetailState {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailAddress: string;
  address: string;
  city: string;
  linkedInAddress: string;
  country: string;
  zipCode: string;
}
export const defaultPersonalDetail = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  emailAddress: "",
  address: "",
  city: "",
  linkedInAddress: "",
  country: "",
  zipCode: "",
};
const initialState: PersonalDetailState = {
  firstName: "Praveen Jayanth",
  lastName: "Kamatham",
  mobileNumber: "9550737001",
  emailAddress: "praveen.jayanth.1111@gmail.com",
  address: "Hyderabad",
  linkedInAddress: "www.linkedin.com/in/praveen-jayanth-8b0687199",
  city: "Hyderabad",
  country: "India",
  zipCode: "",
};
export const personalDetailSlice = createSlice({
  name: "personalDetail",
  initialState: {
    personalDetail: initialState,
  },
  reducers: {
    setPersonalDetail: (state, action) => {
      state.personalDetail = action.payload;
    },
  },
});
export const { setPersonalDetail } = personalDetailSlice.actions;
export const personalDetailReducer = personalDetailSlice.reducer;
