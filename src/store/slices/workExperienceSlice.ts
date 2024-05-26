import { createSlice } from "@reduxjs/toolkit";
export interface IWorkExperienceState {
  companyName: string;
  startDate: string;
  endDate: string;
  additionalContent: string;
  id: string;
}
export const defaultWorkSummary: IWorkExperienceState[] = [
  {
    id: "",
    companyName: "",
    startDate: "",
    endDate: "",
    additionalContent: "",
  },
];
export const workExperienceInitialData: IWorkExperienceState[] = [
  {
    companyName: "RECEIVABLES MANAGEMENT COMPANY (Client)",
    startDate: "Jan 2022",
    endDate: "Present",
    additionalContent:
      "Developed 500 anticounterfeit scripts thereby preventing the counterfeit items surfacing onto the catalog for the brands protected under \n Brand Protection Agreement with Amazon. \n Constructed a cost-effective mechanism of running queries daily on the Amazon website to identify counterfeit products so that action \n can be taken to ensure Customer trust. \n Ensured that associates' performance and quality was checked, reported the quality metrics, and provided timely feedback, which improved quality. \n Successfully driven the protection rate to 96% as the Quality Controller for the team thereby exceeding the YTD goals",
    id: Math.random().toString(),
  },
];
const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState: {
    workExperience: workExperienceInitialData,
  },
  reducers: {
    setWorkExperience: (state, action) => {
      state.workExperience = action.payload;
    },
  },
});

export const workExperienceReducer = workExperienceSlice.reducer;
export const { setWorkExperience } = workExperienceSlice.actions;
