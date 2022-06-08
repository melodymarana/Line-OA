import { Box, Button, Icon, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import * as React from 'react';

type ScrollDialogType = {
  title?: string;
  content?: JSX.Element;
  footer?: JSX.Element;
};

export function ScrollDialog(props: ScrollDialogType): JSX.Element {
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
        <DialogTitle component="div" id="scroll-dialog-title" sx={{ p: 8 }}>
          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Typography component="p" variant="h4">
              {props.title}
            </Typography>
            <Button sx={{ height: 24, minWidth: 22, p: 1, marginRight: '-2px' }}>
              <Icon className="fal fa-times" sx={{ fontSize: 24 }} />
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 8 }}>
          <Box tabIndex={-1}>
            <Typography component="div" sx={{ color: 'grey.600' }} variant="body2">
              {props.content}
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
          {props.footer}
        </DialogActions>
      </Dialog>
    </div>
  );
}

ScrollDialog.defaultProps = {
  title: '',
  content: '',
  footer: '',
};
