import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import * as React from 'react';
import { Link } from 'react-router-dom';

import IconPointCoin from '../../assets/img/icon-point-coin.svg';
import { CardItem } from '../../components/card-item';
import { PageHeading } from '../../components/page-heading';
import { SectionHeading } from '../../components/section-heading';
import { UserInfo } from '../../components/user-info';

const Item = styled(Link)(({ theme }) => ({
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: '1',
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

const ProductSlider = styled(Splide)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .splide__list': {
    paddingRight: '6px !important',
  },
}));

const SlideItem = styled(SplideSlide)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  color: theme.palette.primary.main,
  '& img': {
    verticalAlign: 'baseline',
  },
}));

export function IconRight(props: any) {
  return <Icon className="far fa-angle-right" sx={{ fontSize: 24, color: props.color }} />;
}

export function BenefitsPage() {
  return (
    <>
      <PageHeading title="สิทธิประโยชน์" />
      <Box component="section" sx={{ bgcolor: 'background.paper' }}>
        <Box
          sx={(theme) => ({
            paddingBottom: 12,
            color: theme.palette.primary.contrastText,
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 15%, ${theme.palette.primary.main}  100%)`,
          })}
        >
          <Container sx={{ py: 12, px: 11 }}>
            <UserInfo />
          </Container>
        </Box>
        <Container>
          <Card sx={{ mt: -12, mb: 8 }}>
            <Stack direction="row" sx={{ height: 80 }}>
              <Item to="/custom-page">
                <Box>
                  <Typography sx={{ mb: 2 }} variant="body2">
                    ระดับปัจจุบัน
                  </Typography>
                  <Typography variant="h5">มงกุฎเพชร</Typography>
                </Box>
                <IconRight />
              </Item>
              <Divider
                orientation="vertical"
                sx={{ height: 52, alignSelf: 'center', color: 'grey.300' }}
                variant="middle"
                flexItem
              />
              <Item to="/transaction">
                <Box>
                  <Typography sx={{ mb: 2 }} variant="body2">
                    คะแนนสะสม
                  </Typography>
                  <Stack direction="row" justifyContent="center">
                    <img alt="point-gold icon" src={IconPointCoin} />
                    <Typography sx={{ ml: 2 }} variant="h5">
                      999,999
                    </Typography>
                  </Stack>
                </Box>

                <IconRight />
              </Item>
            </Stack>
            <Stack
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              <Item
                sx={{
                  color: 'primary.contrastText',
                }}
                to="/member-level"
              >
                <Box>
                  <Typography variant="h5">ภารกิจปลดล็อคระดับถัดไป</Typography>
                </Box>
                <IconRight color="primary.contrastText" />
              </Item>
            </Stack>
          </Card>
          <Button
            component={Link}
            sx={{ mb: 12, borderColor: 'primary.main' }}
            to="/privilege/history"
            variant="outlined"
            fullWidth
          >
            ประวัติการแลกสิทธิพิเศษ
          </Button>
        </Container>
      </Box>
      <Box component="section" sx={{ display: 'flex', flexDirection: 'column' }}>
        <SectionHeading linkPath="/privilege" linkText="ดูทั้งหมด" title="แลกสิทธิพิเศษ" />
        <ProductSlider
          options={{
            arrows: false,
            drag: 'free',
            perPage: 2,
            perMove: 1,
            gap: 12,
            padding: 16,
            trimSpace: true,
            pagination: false,
          }}
        >
          <SlideItem>
            <CardItem title="คูปองส่วนลดท้ายบิล ราคา 200 บาท ใช้หน้าร้านเท่านั้น" />
          </SlideItem>
          <SlideItem>
            <CardItem
              points="1,000"
              title="รับสิทธิ์ฟรี! 1 แถม 1 สำหรับเมนู Oreo  Frap รับสิทธิ์ฟรี! 1 แถม 1 สำหรับเมนู Oreo  Frap"
            />
          </SlideItem>
          <SlideItem>
            <CardItem title="รับสิทธิ์ฟรี! 1 แถม 1 สำหรับเมนู Oreo  Frap รับสิทธิ์ฟรี! 1 แถม 1 สำหรับเมนู Oreo  Frap" />
          </SlideItem>
        </ProductSlider>
      </Box>
      <Box component="section" sx={{ bgcolor: 'background.paper', pb: 12 }}>
        <SectionHeading title="สิทธิประโยชน์ที่คุณได้รับ" />
        <Container>
          <Grid spacing={8} container>
            <Grid xs={6} container item>
              <Card sx={{ boxShadow: 'none', mb: 4 }}>
                <CardActionArea component={Link} to="/benefits/detail">
                  <CardMedia
                    alt="privilege image"
                    component="img"
                    image="https://via.placeholder.com/1920x1080/eee?text=16:9"
                  />
                </CardActionArea>
              </Card>
              <Typography variant="h6">สิทธิพิเศษ True</Typography>
            </Grid>
            <Grid xs={6} container item>
              <Card sx={{ boxShadow: 'none', mb: 4 }}>
                <CardActionArea component={Link} to="/benefits/detail">
                  <CardMedia
                    alt="privilege image"
                    component="img"
                    image="https://via.placeholder.com/1920x1080/eee?text=16:9"
                  />
                </CardActionArea>
              </Card>
              <Typography variant="h6">สิทธิพิเศษ True</Typography>
            </Grid>
            <Grid xs={6} container item>
              <Card sx={{ boxShadow: 'none', mb: 4 }}>
                <CardActionArea component={Link} to="/benefits/detail">
                  <CardMedia
                    alt="privilege image"
                    component="img"
                    image="https://via.placeholder.com/1920x1080/eee?text=16:9"
                  />
                </CardActionArea>
              </Card>
              <Typography variant="h6">สิทธิพิเศษ True</Typography>
            </Grid>
            <Grid xs={6} container item>
              <Card sx={{ boxShadow: 'none', mb: 4 }}>
                <CardActionArea component={Link} to="/benefits/detail">
                  <CardMedia
                    alt="privilege image"
                    component="img"
                    image="https://via.placeholder.com/1920x1080/eee?text=16:9"
                  />
                </CardActionArea>
              </Card>
              <Typography variant="h6">สิทธิพิเศษ True</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
