import { createSlice } from "@reduxjs/toolkit";

const NavigationSlce = createSlice({
  name: "nav",
  initialState: {
    control: "",
    navigation: "",
    trace: 0,
  },
  reducers: {
    startSliceAction: (state, action) => {
      state.control = action.payload;
    },
    hidenNavigationAction: (state, action) => {
      state.navigation = false;
    },
    handleNextImageChangeAction: (state, action) => {
      state.trace += 1;
    },
    handlePrevImageChangeAction: (state, action) => {
      state.trace -= 1;
    },
  },
});

export const {
  startSliceAction,
  handleNextImageChangeAction,
  handlePrevImageChangeAction,
} = NavigationSlce.actions;
export default NavigationSlce.reducer;
