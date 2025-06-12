import { createSlice } from "@reduxjs/toolkit";
interface product{
  id:number,
  title:string,
  image:string,
  price:number,
  rating: {
        rate: number,
        count: number
    }
}
