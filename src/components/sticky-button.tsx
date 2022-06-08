import { AppBar, Container } from '@mui/material';
import * as React from 'react';

type StickyButtonType = {
  button?: JSX.Element;
};

export function StickyButton(props: StickyButtonType): JSX.Element {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        bgcolor: 'background.paper',
        py: 8,
        bottom: 0,
        top: 'unset',
        boxShadow: '0 0 10px -1px rgba(0,0,0,0.14)',
      }}
    >
      <Container>{props.button}</Container>
    </AppBar>
  );
}

StickyButton.defaultProps = {
  button: '',
};
