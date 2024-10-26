import { configureStore } from "@reduxjs/toolkit";
import fruitSlice from "../features/fruits/fruitSlice";

export const store = configureStore({
  reducer: {
    fruits: fruitSlice,
  },
});
