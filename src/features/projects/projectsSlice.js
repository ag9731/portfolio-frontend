import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Axios";

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (projectData, thunkAPI) => {
    const response = await api.post("/api/v1/skills/newproject", projectData);
    return response.data;
  }
);

export const displayAllProjects = createAsyncThunk(
  "projects/displayAllProjects",
  async (_, thunkAPI) => {
    const response = await api.get("/api/v1/skills/viewallprojects");
    return response.data;
  }
);

const initialState = {
  projects: [],
  loading: false,
  success: false,
  error: null,
};

const projectsSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    clearAuthState(state) {
      state.projects = null;
      //   state.isAuthenticated = false;
      state.error = null;
      state.loading = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // create Project
    builder
      .addCase(createProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.success = true;
      })
      .addCase(createProject.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(displayAllProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(displayAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload.projects;
        state.success = true;
      })
      .addCase(displayAllProjects.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearAuthState } = projectsSlice.actions;
export default projectsSlice.reducer;
