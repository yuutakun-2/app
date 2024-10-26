import { createSlice } from "@reduxjs/toolkit";

const fruitSlice = createSlice({
  name: "fruits",
  initialState: [
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Orange", price: 0.89 },
  ],
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectFruits = (state) => state.fruits;
// No need to explicitly state as fruitSlice because argument "state" passed here refers to the "state of the whole slice"
// then state.fruits selectively gives fruits state data to selectFruits
export const { add, remove } = fruitSlice.actions;

export default fruitSlice.reducer;
