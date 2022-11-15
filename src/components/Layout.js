import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ResponsiveAppBar from './AppBar/AppBar';
import { Suspense } from 'react';

import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Suspense fallback={null}>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
