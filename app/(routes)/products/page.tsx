'use client';
import { useEffect, useState } from 'react';
import Navbar from "../../component/Navbar";
import ProductCard from "../../component/Card";
import { Box, Typography } from '@mui/joy';
import Product from '../../component/product';
import getAllData from '../../lib/fecth/fetch';
import Pagination from "@/app/component/Pagination";

export default function DashBoard() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  
  const [currentPage, setCurrentPage] = useState<number>(0);
  const PAGE_SIZE = 10;

  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      const fetchedData = await getAllData();
      setData(fetchedData);
      setLoading(false);  
    }
    fetchData();
  }, []);

  const totalPage = Math.ceil(data.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const goToNextPage = () => {
      setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <Navbar />
      <Typography level="h2">Popular Products</Typography>

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
        {loading ? (
          <Typography>⏳ Loading...</Typography>
        ) : (
          data.slice(start, end).map((p) => <ProductCard key={p.id} {...p} />)
        )}
      </Box>

      {!loading && (
        <Pagination
          currentPage={currentPage}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          totalPage={totalPage}
        />
      )}
    </>
  );
}
