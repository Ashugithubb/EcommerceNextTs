'use client'
import Image from "next/image";
import Navbar from "../../component/Navbar";
import ProductCard from "../../component/Card";
import { Box, Typography } from '@mui/joy';
import Product from '../../component/product';
import getAllData from '../../lib/fecth/fetch';
import ProtectedRoute from "../../utils/ProtectedRoutes";
import { Button, IconButton } from '@mui/material';
import { Content } from "next/font/google";
import Pagination from "@/app/component/Pagination";
import { useEffect, useState } from "react";
export default function DashBoard() {
  const [data, setData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const PAGE_SIZE = 10;

  useEffect(() => {
    async function Fetching() {
      const fetchedData = await getAllData();
      setData(fetchedData); 
    }
    Fetching();
  }, []);

  const TotalPage = Math.ceil(data.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

 const goToNextPage = () => {
  console.log("next");
   setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    console.log("prev");
setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Navbar />
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
        {data.slice(start, end).map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Box>

      <Pagination
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        totalPage={TotalPage}
      />
    </>
  );
}
