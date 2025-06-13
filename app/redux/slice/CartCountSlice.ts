import { createSlice } from "@reduxjs/toolkit";
interface count{
    value:number
}
const initialState: count = {
    value: 0
};
 const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        setCount:(state)=>{
            state.value++
        }
    }
 })
 export const {setCount} = CounterSlice.actions;
export default CounterSlice.reducer;