import { Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';

type ExpiredDateType = {
  date?: string;
};

export function ExpiredDate(props: ExpiredDateType): JSX.Element {
  return (
    <Stack alignItems="center" direction="row" sx={{ mb: 2 }}>
      <Icon className="fal fa-calendar" sx={{ mr: 2, color: 'grey.500', fontSize: 16 }} />
      <Typography component="span" sx={{ color: 'grey.500' }} variant="body2">
        {props.date}
      </Typography>
    </Stack>
  );
}

ExpiredDate.defaultProps = {
  date: 'ถึง 30 ก.ย. 64',
};
