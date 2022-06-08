import { Box, Container, Divider, Typography } from '@mui/material';
import * as React from 'react';

import { PageHeading } from '../../components/page-heading';

export function CustomPage() {
  return (
    <>
      <PageHeading title="สิทธิประโยชน์ของสมาชิก" />
      <Container sx={{ bgcolor: 'background.paper', flex: 1 }}>
        <Box className="text-editor">
          <Typography sx={{ pt: 8, pb: 6 }} variant="h5">
            รายละเอียดระดับทั้งหมด
          </Typography>
          <Typography component="p" sx={{ pb: 6, mb: 4 }} variant="body2">
            ทุก ๆ ยอดชำระจริง 1,000 บาท ในแต่ละบิลของลูกค้า จะนามาคิดเป็นคะแนนสะสม โดยปัดเศษที่ไม่ครบ 1,000 บาททิ้ง
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate egestas quam vestibulum quis.
          </Typography>
          <Divider />
          <Typography component="p" sx={{ py: 8, mb: 4 }} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate egestas quam vestibulum quis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vulputate egestas quam vestibulum quis.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
