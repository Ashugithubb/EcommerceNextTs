import type Product  from "@/app/component/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface productSate{
    products:Product[];
}

const initialState: productSate = {
  products: []
};
const ProductsSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        setProduct : (state,action: PayloadAction<Product>) =>{
            const existing = state.products.find(item=> item.id === action.payload.id);
            if(existing){
                alert("Item Already Exist")
            }
            else{
            state.products.push(action.payload);}
        },
        removeProduct :(state,action: PayloadAction<number>)=>{
            state.products = state.products.filter((item) => item.id !== action.payload);
        }
    }

})
 export default ProductsSlice.reducer;
 export const {setProduct, removeProduct } = ProductsSlice.actions;