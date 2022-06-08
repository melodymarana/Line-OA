import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';

type CardDetailType = {
  image?: string;
  heading?: JSX.Element;
  contentTitle?: string;
  content?: JSX.Element;
};

export function CardDetail(props: CardDetailType): JSX.Element {
  return (
    <>
      <Stack sx={{ width: '100%', '& img': { maxWidth: '100%' } }}>
        <img alt="" src={props.image} />
      </Stack>
      <Container sx={{ bgcolor: 'background.paper', height: '100%', flex: '1' }}>
        <Box sx={{ py: 8 }}>
          <Box>{props.heading}</Box>
          <Divider />
          <Box sx={{ pt: 8 }}>
            <Typography sx={{ mb: 4 }} variant="h5">
              {props.contentTitle}
            </Typography>
            <Typography
              component="div"
              sx={{
                color: 'grey.600',
              }}
              variant="body2"
              gutterBottom
            >
              {props.content}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

CardDetail.defaultProps = {
  image: 'https://via.placeholder.com/1080x720/eee?text=3:2',
  heading: '',
  contentTitle: '',
  content: '',
};
