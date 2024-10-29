import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Supplier } from "@prisma/client"; // Assuming this is your Prisma client type


interface CreateSupplierState {
    creating: boolean;
    error:  string | undefined;
    createdSupplier: Supplier | null;
}
const initialState: CreateSupplierState = {
  creating: false,
  error: undefined,
  createdSupplier: null,
};

export const createSupplier = createAsyncThunk(
  "suppliers/createSupplier",
  async (supplierData: Supplier) => {
    const response = await fetch("/api/suppliers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(supplierData),
    });

    if (!response.ok) {
      throw new Error("Failed to create supplier");
    }

    const data = await response.json();
    return data;
  }
);

const createSupplierSlice = createSlice({
  name: "createSupplier",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSupplier.pending, (state) => {
        state.creating = true;
        state.error = undefined;
        state.createdSupplier = null;
      })
      .addCase(createSupplier.fulfilled, (state, action) => {
        state.creating = false;
        state.createdSupplier = action.payload;
      })
      .addCase(createSupplier.rejected, (state, action) => {
        state.creating = false;
        state.error = action.error.message || "Failed to create supplier" 

      });
  },
});

export default createSupplierSlice.reducer;
