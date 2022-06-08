import { Card, CardActionArea, CardContent, CardMedia, Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import IconPointCoin from '../assets/img/icon-point-coin.svg';

type CardItemType = {
  image?: string;
  title?: string;
  points?: string;
};

export function CardItem(props: CardItemType): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={Link} to="/privilege/detail">
        <CardMedia alt="product image" component="img" image={props.image} />
        <CardContent sx={{ py: 4, px: 5 }}>
          <Typography
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant="h6"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Stack alignItems="center" direction="row" justifyContent="flex-start" spacing={2} sx={{ mb: 3 }}>
            <Icon>
              <img alt="point-gold icon" src={IconPointCoin} />
            </Icon>
            <Typography color="error" component="span" variant="h5">
              {props.points}
            </Typography>
          </Stack>
          <Stack alignItems="center" direction="row" sx={{ mb: 2 }}>
            <Icon className="fal fa-calendar" sx={{ mr: 2, color: 'grey.500', fontSize: 16 }} />
            <Typography component="span" sx={{ color: 'grey.500' }} variant="body2">
              ถึง 30 ก.ย. 64
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardItem.defaultProps = {
  image: 'https://via.placeholder.com/1080x720/eee?text=3:2',
  title: 'คูปองส่วนลดท้ายบิล ราคา 200 บาท ใช้หน้าร้าน',
  points: '2,000',
};
