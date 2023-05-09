import { createSlice } from "@reduxjs/toolkit";

const commandSlice = createSlice({
  name: "commands",
  initialState: { move: 150 },
  reducers: {
    left(state) {
      
      state.move--;
    },
    right(state) {
      
      state.move++;
    },
  },
});

export default commandSlice;
