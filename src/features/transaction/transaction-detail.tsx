import { Container, Divider, Typography } from '@mui/material';
import * as React from 'react';

import { CouponDetail } from '../../components/coupon-detail';
import { PointsBar } from '../../components/points-bar';

export function TransactionDetail() {
  return (
    <>
      <PointsBar />
      <Container sx={{ bgcolor: 'background.paper', flex: 1 }}>
        <Typography sx={{ pt: 8, pb: 6 }} variant="h5">
          คะแนนสะสมจากร้านค้า
        </Typography>
        <Divider />
        <Typography sx={{ py: 4 }} variant="h5">
          รายละเอียด
        </Typography>
        <CouponDetail />
      </Container>
    </>
  );
}
