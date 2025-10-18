'use client';

import ProtectedRoute from '@/app/utils/ProtectedRoutes';
import { Box } from '@mui/material';
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', 
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <ProtectedRoute>{children}</ProtectedRoute> 1
    </Box>  
  );
}

