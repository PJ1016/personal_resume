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
  country: "India",
  zipCode: "",
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
