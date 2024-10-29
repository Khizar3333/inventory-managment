import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product, Inventory } from '@prisma/client'; // Adjust path as needed
import { InventoryState } from '@/app/types/types';

const initialState: InventoryState = {
  products: [],
  loading: false,
  error: undefined,
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk<Product[]>(
  'inventory/fetchProducts',
  async () => {
    const response = await fetch('/api/Product'); // Adjust API endpoint
    const data = await response.json();
    return data.products;
  }
);

// Async thunk for adding a product
export const addProduct = createAsyncThunk<Product, Partial<Product>>(
  'inventory/addProduct',
  async (newProduct) => {
    const response = await fetch('/api/Product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    return data.product;
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add product';
      });
  },
});

export default inventorySlice.reducer;
