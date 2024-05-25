// lib/features/breadcrumb/todoSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BreadcrumbState {
  items: object[];
}

const initialState: BreadcrumbState = {
  items: [],
};

const todoSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setBreadcrumb: (state, action: PayloadAction<object[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setBreadcrumb } = todoSlice.actions;
export const selectBreadcrumb = (state: { breadcrumb: BreadcrumbState }) =>
  state.breadcrumb.items;

export default todoSlice.reducer;
