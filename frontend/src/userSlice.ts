import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
    loading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: UserState = {
    loading: false,
    error: null,
    success: false,
};

export const signupUser = createAsyncThunk(
    'user/signup',
    async (userData: {username: string; email: string; password: string}, thunkAPI) => {
        try{
            const response = await axios.post('http://localhost:8000/api/accounts/signup/',userData);
            return response.data;
        } catch(error: any){
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(signupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        .addCase(signupUser.fulfilled,(state)=>{
            state.loading = false;
            state.success = true;
        })
        .addCase(signupUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default userSlice.reducer;