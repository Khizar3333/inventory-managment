import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SupplierState {
  supplier: {
    id: string;
    name: string;
    email: string;
    contact: string;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: SupplierState = {
  supplier: null,
  loading: false,
  error: null,
};

export const fetchSupplier = createAsyncThunk(
  'supplier/fetchSupplier',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/supplierid/${id}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch supplier');
      }
      return data.supplier;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSupplier = createAsyncThunk(
  'supplier/updateSupplier',
  async ({ id, name, email, contact }: { id: string; name: string; email: string; contact: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/supplierid/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, contact }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update supplier');
      }
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const editsupplierSlice = createSlice({
  name: 'editsupplier',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupplier.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSupplier.fulfilled, (state, action) => {
        state.loading = false;
        state.supplier = action.payload;
      })
      .addCase(fetchSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateSupplier.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSupplier.fulfilled, (state, action) => {
        state.loading = false;
        state.supplier = action.payload;
      })
      .addCase(updateSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default editsupplierSlice.reducer;
