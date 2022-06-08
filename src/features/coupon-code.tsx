import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Icon,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

// import canceled from 'src/assets/img/coupon-canceled.svg';
// import expired from 'src/assets/img/coupon-expired.svg';
import redeemed from '../assets/img/coupon-redeemed.svg';

export function CouponCode() {
  return (
    <Container sx={{ py: 8 }}>
      <Stack component="section" flexDirection="column" sx={{ maxWidth: 343, mx: 'auto' }}>
        <Card
          className="disabled" // show coupon status
          sx={{
            mx: 'auto',
            borderRadius: 4,
            overflow: 'initial',
            boxShadow: '0px 10px 12px -10px rgba(0,0,0,0.45)',
            position: 'relative',
            '&.disabled .coupon-status': {
              display: 'flex',
            },
            '&.disabled .MuiCardContent-root:before': {
              content: '" "',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(255,255,255,0.6)',
              borderRadius: 14,
              zIndex: 99,
            },
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Stack
              direction="row"
              spacing={6}
              sx={{
                p: 8,
                borderBottom: '1px dashed',
                borderColor: 'grey.300',
                position: 'relative',
                '&:before, &:after': {
                  content: '" "',
                  width: 30,
                  height: 30,
                  backgroundColor: 'grey.400',
                  borderRadius: 50,
                  position: 'absolute',
                  zIndex: 99,
                },
                '&:before': {
                  bottom: -14,
                  left: -14,
                },
                '&:after': {
                  bottom: -14,
                  right: -14,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  '& img': {
                    width: 98,
                    height: 73,
                    borderRadius: 3,
                    border: 1,
                    borderColor: 'grey.300',
                    objectFit: 'cover',
                  },
                }}
              >
                <img alt="thumbnail" src="https://via.placeholder.com/1080x720/eee?text=3:2" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    mb: 2,
                  }}
                  variant="body1"
                >
                  คูปองส่วนลดท้ายบิล ราคา 100 บาท ใช้หน้าร้านค้า แลกเพียง 1,000
                </Typography>
                <Stack alignItems="center" direction="row">
                  <Icon className="fal fa-info-circle" sx={{ mr: 2, color: 'grey.500', fontSize: 16 }} />
                  <Typography component="span" sx={{ color: 'grey.500' }} variant="body2">
                    08 ก.ย. 64, 15:32
                  </Typography>
                </Stack>
              </Box>
            </Stack>
            <Box sx={{ textAlign: 'center', p: 12 }}>
              <Typography sx={{ mb: 12, maxWidth: 204, mx: 'auto' }} textAlign="center" variant="h4">
                กรุณาแสดงรหัสที่เคาน์เตอร์ หรือจุดขายเพื่อรับสิทธิ์
              </Typography>
              <Box sx={{ mb: 12 }}>
                <img alt="qr code" src="https://via.placeholder.com/139x139/eee?text=Qrcode" />
              </Box>
              <Box sx={{ mb: 12 }}>
                <img alt="barcode code" src="https://via.placeholder.com/257x62/eee?text=Barcode" />
              </Box>
              <Box sx={{ mb: 12 }}>
                <TextField
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button sx={{ minWidth: 48, height: 40 }}>
                          <Icon className="fal fa-copy" sx={{ fontSize: 16 }} />
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  maxRows="2"
                  sx={{
                    '& .MuiInputBase-root': {
                      py: 2,
                      pr: 0,
                      minheight: 40,
                      fontSize: 18,
                      fontWeight: 600,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderWidth: '0 !important',
                    },
                  }}
                  value="CP67392"
                  multiline
                />
              </Box>
              <Typography sx={{ mb: 2 }} textAlign="center" variant="h5">
                รหัสจะหมดเวลาภายใน
              </Typography>
              <Typography sx={{ mb: 2, fontWeight: 600, color: 'error.main' }} textAlign="center" variant="h2">
                14:59
              </Typography>
            </Box>
          </CardContent>

          <Stack
            alignItems="center"
            className="coupon-status"
            justifyContent="flex-start"
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 99,
              display: 'none',
              '& img': {
                maxWidth: 225,
                maxHeight: 225,
                marginTop: '144px',
              },
            }}
          >
            <img alt="coupon is redeemed" src={redeemed} />
          </Stack>
        </Card>
        <Box sx={{ pt: 16, mb: 4 }}>
          <Button color="info" component={Link} to="/" variant="outlined" fullWidth>
            กลับไปหน้าหลัก
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
