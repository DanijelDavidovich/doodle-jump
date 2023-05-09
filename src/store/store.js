import { configureStore } from "@reduxjs/toolkit";
import commandSlice from "./commands";

const store = configureStore({ reducer: commandSlice });

export const commandActions = commandSlice.actions;

export default store;
