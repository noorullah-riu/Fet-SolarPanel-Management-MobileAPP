import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Services from '../../networking/auth/Services';


interface CustomersData {
  CardCode: string,
  CardName: string,
  CardFName: string,
  AccountBalance: number,
  CreditLimit: number,
  RemainingLimit: number,
  TaxCode: string,
  TaxName: string,
  TaxRate: any
}                                       

const usersSlice = createSlice({                                                                                         
  name: "message",
  initialState: {
    customers: null,
    loading: false,
    Error:false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(Services.getCustomers.pending, state => {
      state.loading = true
      state.Error=false
    })
    builder.addCase(Services.getCustomers.fulfilled, (state, action) => {
      state.loading = false
      state.customers = action.payload
      state.Error=false
    })
    builder.addCase(Services.getCustomers.rejected, (state) => {
      state.Error=true
      state.loading = false
 
    })
  }
})

export default usersSlice.reducer
