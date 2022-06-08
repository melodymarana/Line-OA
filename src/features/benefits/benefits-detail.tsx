import { Button, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { CardDetail } from '../../components/card-detail';
import { PageHeading } from '../../components/page-heading';
import { StickyButton } from '../../components/sticky-button';

export function BenefitsDetail() {
  return (
    <>
      <PageHeading title="รายละเอียดสิทธิประโยชน์" />
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
          <>
            <Typography component="p" sx={{ color: 'grey.600', fontWeight: 500, mb: 4 }} variant="caption">
              ระดับชิลเวอร์ขึ้นไป
            </Typography>
            <Typography sx={{ mb: 8 }} variant="h5">
              สิทธิพิเศษจาก True
            </Typography>
          </>
        }
      />
      <StickyButton
        button={
          <Button color="info" component={Link} to="/alert-dialog" variant="outlined" fullWidth>
            ยกเลิกเข้าร่วมโครงการ
          </Button>
        }
      />
    </>
  );
}
