import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface count{
    uid:string|null
}
const initialState: count = {
    uid:null
};
 const CounterSlice = createSlice({
    name:"uid",
    initialState,
    reducers:{
        setUid:(state,action:PayloadAction<string>)=>{
            state.uid=action.payload;
        }
    }
 })
 export const {setUid} = CounterSlice.actions;
export default CounterSlice.reducer;