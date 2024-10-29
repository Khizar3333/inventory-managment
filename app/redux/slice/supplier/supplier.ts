import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Supplier } from "@prisma/client"; // Assuming this is your Prisma client type
import { suppliersState } from "@/app/types/types";

const initialState: suppliersState = {
  suppliers: [],
  loading: false,
  error: null,
};

export const fetchSuppliers = createAsyncThunk(
  "suppliers/fetchSuppliers",
  async () => {
    const response = await fetch('/api/suppliers'); // Adjust API endpoint
    const data = await response.json();
    return data.suppliers;
  }
);

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuppliers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliers = action.payload;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch suppliers";
      });
  },
});

export default suppliersSlice.reducer;
