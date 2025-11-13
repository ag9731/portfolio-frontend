import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projects/projectsSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    auth: authReducer,
  },
});

