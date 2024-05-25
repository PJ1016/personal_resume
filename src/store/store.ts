import { configureStore } from "@reduxjs/toolkit";
import { personalDetailReducer } from "./slices/personalDetailSlice";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { summaryReducer } from "./slices/summarySlice";
import { workExperienceReducer } from "./slices/workExperienceSlice";
import { educationReducer } from "./slices/educationSlice";

export const store = configureStore({
  reducer: {
    personalDetail: personalDetailReducer,
    summary: summaryReducer,
    workExperience: workExperienceReducer,
    education: educationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
