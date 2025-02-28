import {createSlice} from '@reduxjs/toolkit';
import {getCustomers} from '../../networking/auth/Services';

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(getCustomers.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
    });
    builder.addCase(getCustomers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getCustomers.rejected, (state, action) => {
      state.isLoading = false;
      //  state.data = action.payload;
      state.error = action.payload;
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

//export default todoSlice;
export {customerSlice};
