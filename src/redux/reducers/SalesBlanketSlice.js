import {createSlice} from '@reduxjs/toolkit';
import {getSalesBlanket} from '../../networking/auth/Services';

const salesBlanketSlice = createSlice({
  name: 'salesBlanket',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(getSalesBlanket.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
    });
    builder.addCase(getSalesBlanket.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(getSalesBlanket.rejected, (state, action) => {
      state.isLoading = false;
      //  state.data = action.payload;
      state.error = action.payload;
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

//export default todoSlice;
export {salesBlanketSlice};
