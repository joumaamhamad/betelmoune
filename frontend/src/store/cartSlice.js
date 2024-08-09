import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCart } from './authSlice';

// Add Product To Cart

export const addProductToCart = createAsyncThunk(
  'products/addToCart',
  async (products, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.post(
        'http://localhost:5000/api/cart/product',
        products,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
      const productsData = await response.data;

      if (productsData.message) {
        return productsData.message;
      } else {
        dispatch(getCart(productsData));
        return productsData;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// Add Workshop To Cart

export const addWorkshopToCart = createAsyncThunk(
  'products/addToCart',
  async (workshops, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.post(
        'http://localhost:5000/api/cart/workshop',
        workshops,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
      const workshopsData = await response.data;

      if (workshopsData.message) {
        return workshopsData.message;
      } else {
        dispatch(getCart(workshopsData));
        return workshopsData;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// Change Quantity of Product

export const changeQuantity = createAsyncThunk(
  'cart/changeQuantity',
  async (product, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.put(
        'http://localhost:5000/api/cart/quantity',
        product,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
      const updateProduct = await response.data;

      if (updateProduct.message) {
        return updateProduct.message;
      } else {
        dispatch(getCart(updateProduct));
        return updateProduct;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// Delete Item from Cart

export const deleteFromCart = createAsyncThunk(
  'cart/deleteFromCart',
  async (item, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.put(
        'http://localhost:5000/api/cart/deleteFromCart',
        item,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
      const updatedData = await response.data;

      if (updatedData.message) {
        return updatedData.message;
      } else {
        dispatch(getCart(updatedData));
        return updatedData;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    productsFilter: [],
    categories: [],
    selectedProduct: [],
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default cartSlice.reducer;
