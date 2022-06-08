import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { CardDetail } from '../../components/card-detail';
import { CouponDetail } from '../../components/coupon-detail';
import { PointsAmount } from '../../components/points-amount';
import { PointsBar } from '../../components/points-bar';
import { StickyButton } from '../../components/sticky-button';

export function PrivilegeHistoryDetail() {
  return (
    <>
      <PointsBar />
      <CardDetail
        content={<CouponDetail />}
        contentTitle="รายละเอียด"
        heading={
          <>
            <Typography variant="h5" gutterBottom>
              คูปองส่วนลดท้ายบิล ราคา 100 บาท ใช้หน้าร้านค้า แลกเพียง 1,000 คะแนนเท่านั้น
            </Typography>
            <Box sx={{ mb: 4 }}>
              <PointsAmount amount="2,000" color="error.main" />
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography color="error.main" component="p" variant="h5">
                รับสิทธิ์ฟรี
              </Typography>
            </Box>
          </>
        }
      />
      <StickyButton
        button={
          <Button component={Link} to="/qrcode" variant="contained" fullWidth>
            แสดงคูปอง
          </Button>
        }
      />
    </>
  );
}
