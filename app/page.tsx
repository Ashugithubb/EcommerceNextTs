import Image from "next/image";
import Navbar from "./component/Navbar";
import  ProductCard from "./component/Card";
import { Box, Typography } from '@mui/joy';
import Product from './component/product';
import getAllData from './fetching/Fecth';
// interface product{
//   id:number,
//   title:string, console.log(data);
//   image:string,
//   price:number,
//   rating: {
//         rate: number,
//         count: number
//     }
// }
// https://dummyjsn.com/products

export default async function Home() {

  const data: Product[]  = await getAllData();
 return (
  <>
  <Navbar/>
    <Typography>Popular Products</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
          mt: 2,
        }}
      >
        {data.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Box>

  </>
);
}