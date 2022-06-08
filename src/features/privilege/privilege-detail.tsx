import { Box, Button, Typography, Icon } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { CardDetail } from '../../components/card-detail';
import { ExpiredDate } from '../../components/expired-date';
import { PointsAmount } from '../../components/points-amount';
import { PointsBar } from '../../components/points-bar';
import { StickyButton } from '../../components/sticky-button';

export function PrivilegeDetail() {
  return (
    <>
      <PointsBar />
      <CardDetail
        content={
          <Typography
            component="div"
            sx={{
              color: 'grey.600',
            }}
            variant="body2"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis sed mattis felis, eget. Risus eget aliquet
            massa id convallis mi posuere commodo diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis
            sed mattis felis, eget. Risus eget aliquet massa id convallis mi posuere commodo diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Magnis sed mattis felis, eget. Risus eget aliquet massa id convallis mi
            posuere commodo diam.
          </Typography>
        }
        contentTitle="สิทธิประโยชน์จาก True เฉพาะคู่ค้า CPF"
        heading={
          <Box>
            <Typography variant="h5" gutterBottom>
              คูปองส่วนลดท้ายบิล ราคา 100 บาท ใช้หน้าร้านค้า แลกเพียง 1,000 คะแนนเท่านั้น
            </Typography>
            <Box sx={{ mb: 4 }}>
              <PointsAmount amount="2,000" color="error.main" />
            </Box>
            <Box sx={{ mb: 6 }}>
              <ExpiredDate />
            </Box>
            <Box sx={{ mb: 6 }}>
              <Button component="p" variant="contained" disabled fullWidth>
                <Icon className="fas fa-exclamation-circle" sx={{ fontSize: '18px', color: 'grey.500', mr: 6 }} />
                สิทธิ์ทั้งหมดเต็มแล้ว
              </Button>
            </Box>
          </Box>
        }
      />
      <StickyButton
        button={
          <Button component={Link} to="/summary-points" variant="contained" fullWidth /* disabled */>
            กดรับสิทธิ์
          </Button>
        }
      />
    </>
  );
}
