'use client'
import {useEffect,useState} from 'react';
import axios from "axios";
import Image from "next/image";
import Navbar from "./component/Navbar";
import  ProductCard from "./component/Card";
import { Box, Typography } from '@mui/joy';
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

export default function Home() {
  const [data,setData] = useState<product[]>([]);
  const [loading,setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  useEffect(()=>{
    
    async function fetchdata (){
      try{
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    setLoading(false);
    }
    catch(err:any){
      setError(err.message || "Something went wrong");
    }  
  }
fetchdata(); 
},[])
  return (
    <>
    <Navbar/>
    <Typography><b>Popular Products</b></Typography>
    <Box sx={{
      display:'flex',
      flexDirection:'row',
      flexWrap:"wrap",
      gap:8,
      justifyContent: 'center',
      mt:2,
    }}>
   { data.map((p) => (<ProductCard key={p.id} {...p} />)
    )}
    </Box>
    </>
  );
}
