import { Box, Button, Dialog, DialogActions, DialogContent, Typography, Icon, Stack } from '@mui/material/';
import * as React from 'react';

export function AlertDialog() {
  return (
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
      <DialogContent sx={{ px: 12, pt: 12, pb: 4, textAlign: 'center' }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '56px',
            height: '56px',
            borderRadius: 50,
            backgroundColor: 'grey.300',
            mb: 8,
            mx: 'auto',
          }}
        >
          <Icon className="fal fa-exclamation-circle" sx={{ color: 'primary.main' }} />
        </Stack>
        <Box>
          <Typography component="p" sx={{ mb: 6, fontWeight: 400 }} variant="h4">
            ยกเลิกเข้าร่วมโครงการ
          </Typography>
          <Typography component="p" sx={{ color: 'grey.600' }} variant="body2">
            คุณต้องการยกเลิกเข้าโครงการใช่หรือไม่
            <br />
            หากคุณยกเลิกเข้าร่วมโครงการ
            <br />
            คุณจะไม่สามารถเข้าร่วมโครงการได้อีก
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          p: 8,
          '& button:not(:first-of-type)': {
            ml: 6,
          },
        }}
      >
        <Button color="info" variant="outlined" fullWidth>
          ไม่เข้าร่วม
        </Button>
        <Button variant="contained" fullWidth>
          เข้าร่วม
        </Button>
      </DialogActions>
    </Dialog>
  );
}
