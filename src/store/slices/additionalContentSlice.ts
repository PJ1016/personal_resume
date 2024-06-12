import { createSlice } from "@reduxjs/toolkit";
export interface IContent {
  id: string;
  title: string;
  subHeader: string;
  startDate: string;
  endDate: string;
  content: string;
}
export interface IAdditionalContent {
  additionalContent: IContent[];
}
const initialState: IAdditionalContent = {
  additionalContent: [],
};
const additionalContentSlice = createSlice({
  name: "additionalContent",
  initialState,
  reducers: {
    addContent: (state, action) => {
      state.additionalContent.push(action.payload);
    },
    updateContent: (state, action) => {
      state.additionalContent = action.payload;
    },
  },
});
export const { addContent, updateContent } = additionalContentSlice.actions;
export const additionalContentReducer = additionalContentSlice.reducer;
