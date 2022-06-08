import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Item = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: '1',
});

export function SummaryPoints() {
  return (
    <div>
      <Dialog
        aria-describedby="scroll-dialog-description"
        aria-labelledby="scroll-dialog-title"
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            maxWidth: 400,
            borderRadius: 4,
          },
        }}
        open
      >
        <DialogTitle
          component="div"
          id="scroll-dialog-title"
          sx={{ pt: 9, pb: 8, px: 12, backgroundColor: 'grey.300' }}
        >
          <Stack justifyContent="center">
            <Typography component="p" sx={{ mb: 6 }} textAlign="center" variant="h4">
              สรุปคะแนนรับสิทธิ์
            </Typography>
            <Item>
              <Typography component="p" variant="body1">
                คุณมีคะแนน
              </Typography>
              <Typography component="p" variant="body1">
                9,999,999 คะแนน
              </Typography>
            </Item>
            <Item color="error.main">
              <Typography component="p" sx={{ fontSize: 15, fontWeight: 400 }}>
                ใช้คะแนน
              </Typography>
              <Typography component="h4" sx={{ fontWeight: 600 }} variant="body1">
                1,000 คะแนน
              </Typography>
            </Item>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 6, color: 'grey.600' }} tabIndex={-1}>
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet. tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo
              eget magna. Turpis cursus in hac habitasse. Sit amet est placerat in egestas. Libero enim sed faucibus
              turpis in eu mi. Semper auctor neque vitae tempus quam. A diam sollicitudin tempor id. Magna fermentum
              iaculis eu non diam phasellus vestibulum. Leo duis ut diam quam nulla. Non nisi est sit amet facilisis
              magna etiam tempor orci. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Tincidunt dui ut
              ornare lectus sit. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nunc id cursus
              metus aliquam eleifend mi. Id cursus metus aliquam eleifend mi. Ultrices tincidunt arcu non sodales neque.
              Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. In mollis nunc sed id semper risus in
              hendrerit. Aenean pharetra magna ac placerat vestibulum lectus. Vitae congue mauris rhoncus aenean vel.
              Scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet id donec ultrices tincidunt arcu non
              sodales neque sodales. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
              Lectus quam id leo in. Venenatis a condimentum vitae sapien. Vel pretium lectus quam id Leo in.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            flexDirection: 'column',
            p: 12,
            '& button': {
              marginX: '0 !important',
            },
          }}
        >
          <Typography component="p" sx={{ mb: 7 }} variant="h5">
            กดยืนยันเพื่อรับสิทธิ์
          </Typography>
          <Stack width="100%">
            <Button component={Link} sx={{ mb: 6 }} to="/qrcode" variant="contained" fullWidth>
              ยืนยัน
            </Button>
            <Button color="info" component={Link} to="/home" variant="outlined" fullWidth>
              ยกเลิก
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}
