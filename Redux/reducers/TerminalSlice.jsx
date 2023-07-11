import { createSlice } from "@reduxjs/toolkit";
import { CommandMap } from "../helper/TerminalHelper";




const initialState = {
    history:[{
        command:"",
        output:CommandMap("initialCommand")
    }],

}
const TerminalSlice = createSlice({
    name:"TerminalSlice",
    initialState,
    reducers:{
        setHistory: (state,action)=>{
            state.history.push(action.payload);
        },

        clearHistory:(state,action)=>{
            state.history=[];
        }

    }
    
})

export const {setHistory,clearHistory} = TerminalSlice.actions

export default TerminalSlice.reducer;