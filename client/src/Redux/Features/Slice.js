import { createSlice } from "@reduxjs/toolkit";

const NavigationSlce = createSlice({
  name: "nav",
  initialState: {
    control: "",
    navigation: "",
  },
  reducers: {
    startSliceAction: (state, action) => {
      state.control = action.payload;
    },
    hidenNavigationAction: (state, action) => {
      state.navigation = false;
    },
  },
});

export const { startSliceAction } = NavigationSlce.actions;
export default NavigationSlce.reducer;
