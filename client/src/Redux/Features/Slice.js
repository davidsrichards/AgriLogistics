import { createSlice } from "@reduxjs/toolkit";

const NavigationSlce = createSlice({
  name: "nav",
  initialState: {
    control: "",
  },
  reducers: {
    startSliceAction: (state, action) => {
      state.control = action.payload;
    },
  },
});

export const { startSliceAction } = NavigationSlce.actions;
export default NavigationSlce.reducer;
