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

// Fetch Selected Product

export const fetchProductBySlug = createAsyncThunk(
  'products/fetchProductBySlug',
  async (productSlug, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${productSlug.slug}`
      );
      const productData = await response.data;

      if (productData.message) {
        return false;
      } else {
        return productData[0];
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// Decrement Available Quantity of Product

export const decrementAvailableQuantity = createAsyncThunk(
  'products/decrementAvailableQuantity',
  async (productData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(
        'http://localhost:5000/api/products/decrementavailablequantity',
        productData,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
      const productUpdated = response.data;

      if (productUpdated.message) {
        return productUpdated.message;
      } else {
        return productUpdated;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsFilter: [],
    categories: [],
    selectedProduct: null,
    isAvailable: false,
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
    setProductsEmpty: (state) => {
      state.products = [];
      state.productsFilter = [];
    },

    // Reset isAvailable State
    resetAvailableState: (state) => {
      state.isAvailable = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        action.payload.forEach((elem) => {
          state.categories.push(elem.category);
        });
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(decrementAvailableQuantity.fulfilled, (state, action) => {
        state.isAvailable = action.payload;
      });
  },
});

export const {
  selectProduct,
  categoriesFilter,
  filterProducts,
  setProductsEmpty,
  resetAvailableState,
} = productsSlice.actions;
export default productsSlice.reducer;
