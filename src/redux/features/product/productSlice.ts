import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFilter {
  status: boolean;
  priceRange: number;
}

const initialState: IFilter = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPriceRange, toggleState } = productSlice.actions;

export default productSlice.reducer;
