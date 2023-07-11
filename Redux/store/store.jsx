import { configureStore } from "@reduxjs/toolkit";
import TerminalSlice from "../reducers/TerminalSlice";


export const store = configureStore({
    reducer:{
        TerminalSlice:TerminalSlice
    }
    ,
});




