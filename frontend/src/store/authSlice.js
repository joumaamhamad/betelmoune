import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logIn = createAsyncThunk('auth/logIn', async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.post('http://localhost:5000/users', data, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const userData = response.data;
    if (userData.message) {
      return false;
    } else {
      return userData;
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post('http://localhost:5000/users', data, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const userData = response.data;
      if (userData.message) {
        return false;
      } else {
        return userData;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    // Empty User State

    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
    extraReducers: (builder) => {
      // Log In Cases

      builder
        .addCase(logIn.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(logIn.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(logIn.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });

      // Sign Up Cases
      builder
        .addCase(logIn.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(logIn.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(logIn.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  },
});

export const { logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
