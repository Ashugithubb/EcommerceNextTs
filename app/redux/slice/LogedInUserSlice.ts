import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface count{
    id:string|null
}
const initialState: count = {
    id:null
};
 const CounterSlice = createSlice({
    name:"uid",
    initialState,
    reducers:{
        setUid:(state,action:PayloadAction<string |null>)=>{
            state.id=action.payload;
        }
    }
 })
 export const {setUid} = CounterSlice.actions;
export default CounterSlice.reducer;