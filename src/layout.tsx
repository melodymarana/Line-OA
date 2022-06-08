import { Box, Container } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Box component="main" sx={{ backgroundColor: 'grey.100', height: '100%', overflowY: 'auto' }}>
      <Container
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'grey.400',
          minHeight: '100%',
          height: '100%',
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
