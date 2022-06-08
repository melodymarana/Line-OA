import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';

import { PointsBar } from '../../components/points-bar';

export function CustomConditionsPage() {
  return (
    <>
      <PointsBar />
      <Container sx={{ bgcolor: 'background.paper', flex: 1 }}>
        <Box className="text-editor">
          <Typography sx={{ pt: 8, pb: 6 }} variant="h5">
            เงื่อนไขการรับคะแนนสะสม
          </Typography>
          <Typography component="p" sx={{ color: 'grey.600' }} variant="body2">
            ทุก ๆ ยอดชำระจริง 1,000 บาท ในแต่ละบิลของลูกค้า จะนามาคิดเป็นคะแนนสะสม โดยปัดเศษที่ไม่ครบ 1,000 บาททิ้ง
          </Typography>
          <Typography component="p" sx={{ color: 'grey.600' }} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate egestas quam vestibulum quis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vulputate egestas quam vestibulum quis.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
