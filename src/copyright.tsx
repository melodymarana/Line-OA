import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export function Copyright() {
  return (
    <Typography align="center" color="text.secondary" variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
