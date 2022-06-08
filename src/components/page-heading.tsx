import { Link, Stack, Typography } from '@mui/material';
import * as React from 'react';

type PageHeadingType = {
  title?: string;
  linkText?: string;
  linkPath?: string;
};

export function PageHeading(props: PageHeadingType): JSX.Element {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="center"
      sx={{
        py: 1,
        px: 8,
        minHeight: 50,
        height: 50,
        position: 'relative',
        bgcolor: 'background.paper',
      }}
    >
      <Typography sx={{ mx: 'auto' }} variant="h4">
        {props.title}
      </Typography>

      <Link
        href={props.linkPath}
        sx={{ color: 'primary.main', position: 'absolute', right: 16 }}
        underline="none"
        variant="body2"
      >
        {props.linkText}
      </Link>
    </Stack>
  );
}

PageHeading.defaultProps = {
  title: '',
  linkText: '',
  linkPath: '',
};
