import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Services from '../../networking/auth/Services';

interface CustomersData {
  CardCode: string;
  CardName: string;
  CardFName: string;
  AccountBalance: number;
  CreditLimit: number;
  RemainingLimit: number;
  TaxCode: string;
  TaxName: string;
  TaxRate: any;
}

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orderList: [] as any,
    loading: false,
    Error: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(Services.getOrders.pending, state => {
      state.loading = true;
      state.Error = false;
    });
    builder.addCase(Services.getOrders.fulfilled, (state, action) => {
      state.orderList = action.payload;
      state.loading = false;
      state.Error = false;
    });
    builder.addCase(Services.getOrders.rejected, state => {
      state.Error = true;
      state.loading = false;
    });
  },
});

export default orderSlice.reducer;
