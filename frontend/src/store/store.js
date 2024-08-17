import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';
import usersSlice from './usersSlice';
import workshopsSlice from './workshopsSlice';

const store = configureStore({
  reducer: {
    authSlice,
    productsSlice,
    cartSlice,
    usersSlice,
    workshopsSlice,
  },
});

export default store;
