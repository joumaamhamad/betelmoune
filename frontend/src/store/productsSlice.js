import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Products Data

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        method: 'GET',
      });

      const productsData = await response.data;

      if (productsData.message) {
        return false;
      } else {
        return productsData;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsFilter: [],
    categories: [],
    selectedProduct: [],
  },
  reducers: {
    // Select Product
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    // Click in Category
    categoriesFilter: (state, action) => {
      state.products = state.products.filter((product) => {
        if (
          product.category.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          return product;
        } else {
          state.productsFilter.push(product);
          return null;
        }
      });

      state.productsFilter = state.productsFilter.filter((product) => {
        if (
          product.category.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          state.products.push(product);
          return null;
        } else {
          return product;
        }
      });
    },

    // Filter Search Product
    filterProducts: (state, action) => {
      state.products = state.products.filter((product) => {
        if (product.name.toLowerCase().includes(action.payload.toLowerCase())) {
          return product;
        } else {
          state.productsFilter.push(product);
          return null;
        }
      });

      state.productsFilter = state.productsFilter.filter((product) => {
        if (product.name.toLowerCase().includes(action.payload.toLowerCase())) {
          state.products.push(product);
          return null;
        } else {
          return product;
        }
      });
    },

    // Empty Products State
    setProductsEmpty: (state, action) => {
      state.products = [];
      state.productsFilter = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      action.payload.forEach((elem) => {
        state.categories.push(elem.category);
      });
    });
  },
});

export const {
  selectProduct,
  categoriesFilter,
  filterProducts,
  setProductsEmpty,
} = productsSlice.actions;
export default productsSlice.reducer;
