import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
  filteredList:[] ,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      console.log(payload);
      state.filters = payload;
    
    },

    setFilteredList: (state, { payload }) => {
      console.log(payload);
      state.filteredList= payload;
    },
  },
});

export const { setFilters, setFilteredList } = filterSlice.actions;

export default filterSlice.reducer;
