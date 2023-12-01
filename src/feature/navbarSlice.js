import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : true,
    isOpen2 : true,
    isOpen3 : true,
};

export const navbarSlice = createSlice({
    name : "navbar",
    initialState,
    reducers : {
        toggleNavbar: (state) => {
            state.isOpen = !state.isOpen;
          },
          toggleNavbar2: (state) => {
            state.isOpen2 = !state.isOpen2;
          },
        toggleNavbar3: (state) => {
          state. isOpen3 = !state. isOpen3;
        },
    }
})

export const {toggleNavbar,toggleNavbar2,toggleNavbar3} = navbarSlice.actions;
export default navbarSlice.reducer;