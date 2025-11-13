import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Axios"
import { createSlice } from "@reduxjs/toolkit";


export const adminLogin = createAsyncThunk(
    'admin/adminLogin',
    async (credentials, thunkAI) => {
        const response = await api.post("/api/v1/auth/admin-login",credentials);
        return response.data;
    }
)

const initialState = {
    user:null,
    loading:true,
    error:false,
    isAuthenticated:false,
    status:false,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        // login
        .addCase(adminLogin.pending ,(state) => {
            state.loading = true,
            state.error = false
        })
        .addCase(adminLogin.fulfilled, (state,action) => {
            state.loading = false,
            state.user = action.payload,
            state.error = false,
            state.isAuthenticated = true
        })
        .addCase(adminLogin.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
            state.isAuthenticated = false;
        })
    }
})

export default authSlice.reducer;