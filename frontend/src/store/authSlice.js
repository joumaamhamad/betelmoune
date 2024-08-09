import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logIn = createAsyncThunk('auth/logIn', async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/signin',
      data,
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    );
    const userData = response.data;
    console.log('response from signin::' , response.data)

    if (userData.message) {
      return false;
    } else {
      localStorage.setItem('userInfo', userData);
      return userData;
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (profile, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put('/api/users/profile', profile);
      const updatedUserData = response.data;
      console.log('data when I update::', updatedUserData);
      localStorage.setItem('userInfo', JSON.stringify(updatedUserData));
      return updatedUserData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/signup',
        data,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
      const userData = response.data;

      if (userData.message) {
        return false;
      } else {
        localStorage.setItem('userInfo', userData);
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
    error: null,
    isLoading: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
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
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Sign Up Cases
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Update Profile Cases
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export const { logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
