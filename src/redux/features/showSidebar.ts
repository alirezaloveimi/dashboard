import { createSlice } from "@reduxjs/toolkit";

type ShowSidebarStateType = {
  show: boolean;
};

const initialState = {
  show: false,
};

const showSidebarSlice = createSlice({
  name: "show sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.show = !state.show;
    },
    hideSidebar: (state) => {
      state.show = false;
    },
  },
});

export const { toggleSidebar, hideSidebar } = showSidebarSlice.actions;
export default showSidebarSlice.reducer;
