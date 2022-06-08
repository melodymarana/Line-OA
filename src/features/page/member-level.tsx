import { Avatar, Box, Card, Container, Divider, Typography, Stack } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import { PageHeading } from '../../components/page-heading';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

export function MemberLevel() {
  return (
    <>
      <PageHeading title="ภารกิจปลดล็อกระดับ" />
      <Container sx={{ bgcolor: 'background.paper', flex: 1 }}>
        <Stack direction="row" spacing={3} sx={{ p: 8 }}>
          <Avatar alt="Jin Rainy" src="https://via.placeholder.com/90x90/eee?text=1:1" sx={{ width: 90, height: 90 }} />
          <Stack justifyContent="center" paddingLeft={4}>
            <Typography sx={{ mb: 1 }} variant="h4">
              คุณ สุกัญญา ศรีวิเศษ
            </Typography>
            <Typography color="primary.main" component="p" sx={{ mb: 1 }} variant="h5">
              3000123475
            </Typography>
            <Typography color="grey.600" component="p" variant="body2">
              กลุ่มสินค้า : หมู
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Box sx={{ py: 8 }}>
          <Typography sx={{ mb: 1 }} variant="h5">
            ภารกิจปลดล็อกระดับ
          </Typography>
          <Typography component="p" variant="body2">
            ปัจจุบันคุณอยู่ระดับ มงกุฎเพชร คุณต้องทำภารกิจปลดล็อก ระดับข้างล่างทั้งหมดพื่ออัปเกรดเป็นระดับถัดไป
          </Typography>
        </Box>
        <Box>
          <Card sx={{ boxShadow: 'none', mb: 8 }}>
            <Box
              sx={{
                py: 4,
                px: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'grey.200',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
              }}
            >
              <Typography sx={{ mb: 4 }} variant="h5">
                ชำระเงินตรงเวลา
              </Typography>
              <Stack alignItems="flex-end" direction="row" spacing={2} sx={{ mb: 2 }}>
                <Typography variant="h4">5 บิล</Typography>
                <Typography color="grey.600" component="span" sx={{ lineHeight: 1.5 }} variant="caption">
                  ที่ชำระเงินตรงเวลาต่อเนื่อง
                </Typography>
              </Stack>
              <BorderLinearProgress value={50} variant="determinate" />
              <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
                <Typography component="span" variant="caption">
                  0 บิล
                </Typography>
                <Typography component="span" variant="caption">
                  10 บิล
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ py: 4, px: 6, backgroundColor: '#000000', color: '#ffffff' }}>
              <Typography component="span" variant="h6">
                ชำระเงินตรงตามเวลา
              </Typography>
              <Typography component="span" sx={{ color: '#ffaf26', ml: 2 }} variant="h6">
                10 บิล / เดือน
              </Typography>
            </Box>
          </Card>
          <Card sx={{ boxShadow: 'none', mb: 8 }}>
            <Box
              sx={{
                py: 4,
                px: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'grey.200',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
              }}
            >
              <Typography sx={{ mb: 4 }} variant="h5">
                ยอดสั่งซื้อ
              </Typography>
              <Stack alignItems="flex-end" direction="row" spacing={1} sx={{ mb: 2 }}>
                <Typography variant="h4">35,000 บาท</Typography>
              </Stack>
              <BorderLinearProgress value={70} variant="determinate" />
              <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
                <Typography component="span" variant="caption">
                  0 บาท
                </Typography>
                <Typography component="span" variant="caption">
                  40,000 บาท
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ py: 4, px: 6, backgroundColor: '#000000', color: '#ffffff' }}>
              <Typography component="span" variant="h6">
                มียอดสั่งซื้อสินค้าตามเป้าหมาย
              </Typography>
              <Typography component="span" sx={{ color: '#ffaf26', ml: 2 }} variant="h6">
                40,000 บาท / เดือน
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
}
