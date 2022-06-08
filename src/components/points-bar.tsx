import { AppBar, Container, Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';

import IconPointCoin from '../assets/img/icon-point-coin.svg';

export function PointsBar() {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{ backgroundColor: 'grey.900', color: 'primary.contrastText', boxShadow: 'none' }}
    >
      <Container>
        <Stack alignItems="center" direction="row" justifyContent="space-between" sx={{ py: 4, height: 46 }}>
          <Typography
            color="inherit"
            component="div"
            sx={{
              maxWidth: 175,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant="h5"
          >
            คุณ สุกัญญา ศรีวิเศษโวหารไพศาลเสรี
          </Typography>
          <Stack alignItems="center" direction="row">
            <Icon sx={{ pr: 2 }}>
              <img alt="point-gold icon" src={IconPointCoin} />
            </Icon>
            <Typography color="inherit" component="div" variant="h5">
              999,999 คะแนน
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}
