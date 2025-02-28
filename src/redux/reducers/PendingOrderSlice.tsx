import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { getPendingOrders } from '../../networking/auth/Services';
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

const pendingOrderSlice = createSlice({
  name: 'ordersP',
  initialState: {
    orderListP: [] as any,
    loadingP: false,
    ErrorP: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPendingOrders.pending, state => {
      state.loadingP = true;
      state.ErrorP = false;
    });
    builder.addCase(getPendingOrders.fulfilled, (state, action) => {
      state.orderListP = action.payload;
      state.loadingP = false;
      state.ErrorP = false;
    });
    builder.addCase(getPendingOrders.rejected, state => {
      state.ErrorP = true;
      state.loadingP = false;
    });
  },
});

export default pendingOrderSlice.reducer;
