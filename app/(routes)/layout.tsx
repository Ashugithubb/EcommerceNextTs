'use client';

import ProtectedRoute from '@/app/utils/ProtectedRoutes';
import { Box, Typography } from '@mui/material';
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // change to your preferred color
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <ProtectedRoute>{children}</ProtectedRoute> 1
    </Box>  
  );
}

