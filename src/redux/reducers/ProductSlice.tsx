import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { getProducts } from '../../networking/auth/Services';

interface ProductsData {
  $id: string;
  availableQty: number;
  discount: number;
  id: string;
  itemCode: string;
  itemGroupCode: number;
  itemName: any;
  lineTotal: number;
  name: string;
  price: number;
  priceList: number;
  qty: number;
  rate: number;
  u_sub1: string;
  u_sub1_name: string;
  u_sub2: string;
  u_sub2_name: string;
  u_sub3: string;
  u_sub3_name: string;
  u_sub4: string;
  u_sub4_name: string;
  vatGourpSa: any;
}

const usersSlice = createSlice({
  name: 'products',
  initialState: {
    UserAuthentic:false,
    product: [] as ProductsData[],
    loading: false,
    Error: false,
    term:"empty",
    arr:[],
  },
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    setarr: (state, action) => {
      state.arr = action.payload;
      console.log(state.arr,"aaa");
    }
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.loading = true;
      state.Error = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.Error = false;
    });
    builder.addCase(getProducts.rejected, state => {
      state.Error = true;
      state.loading = false;
    });
  },
  
});

export const { setTerm,setarr } = usersSlice.actions;
export default usersSlice.reducer;
