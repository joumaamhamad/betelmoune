import { createSlice } from '@reduxjs/toolkit';

const workshopsSlice = createSlice({
  name: 'workshops',
  initialState: {
    selectedWorkshop: [],
  },
  reducers: {
    // Select Workshop
    selectWorkshop: (state, action) => {
      state.selectedWorkshop = action.payload;
    },
  },
});

export const { selectWorkshop } = workshopsSlice.actions;
export default workshopsSlice.reducer;
