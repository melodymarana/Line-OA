import { Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';

import IconPointCoin from '../assets/img/icon-point-coin.svg';

type PointsAmountType = {
  amount?: string;
  color?: string;
  size?: any;
};

export function PointsAmount(props: PointsAmountType): JSX.Element {
  return (
    <Stack alignItems="center" direction="row" justifyContent="flex-start" spacing={2}>
      <Icon sx={{ fontSize: 'unset', lineHeight: 0 }}>
        <img alt="point-gold icon" src={IconPointCoin} />
      </Icon>
      <Typography color={props.color} component="p" variant={props.size}>
        {props.amount}
      </Typography>
    </Stack>
  );
}

PointsAmount.defaultProps = {
  amount: '4,000',
  color: '',
  size: 'h5',
};
