import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
Uid:string
displayName:String | null,
email:string | null,
photoURL:string | null,
}
interface Users{
    users:User[]
}

const initialState:Users ={
    users:[]
} 
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        RegisterUser: (state,action:PayloadAction<User>)=>{
            state.users.push(action.payload)
        }
    }
})
export const {RegisterUser}  = userSlice.actions;
export default userSlice.reducer