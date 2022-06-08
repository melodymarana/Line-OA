import { Link, Stack, Typography } from '@mui/material';
import * as React from 'react';

type SectionHeadingType = {
  title?: string;
  linkText?: string;
  linkPath?: string;
};

export function SectionHeading(props: SectionHeadingType): JSX.Element {
  return (
    <Stack alignItems="center" direction="row" justifyContent="space-between" sx={{ p: 8 }}>
      <Typography variant="h5">{props.title}</Typography>
      <Link href={props.linkPath} sx={{ color: 'primary.main' }} underline="none" variant="body2">
        {props.linkText}
      </Link>
    </Stack>
  );
}

SectionHeading.defaultProps = {
  title: '',
  linkText: '',
  linkPath: '#',
};
