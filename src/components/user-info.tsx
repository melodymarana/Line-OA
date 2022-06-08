import { Avatar, Stack, Typography } from '@mui/material';
import * as React from 'react';

type UserInfoType = {
  image?: string;
  name?: string;
  id?: number;
};

export function UserInfo(props: UserInfoType): JSX.Element {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar alt="Jin Rainy" src={props.image} sx={{ width: 60, height: 60 }} />
      <Stack justifyContent="center" paddingLeft={4}>
        <Typography variant="body2">สวัสดี</Typography>
        <Typography variant="h4">{props.name}</Typography>
        <Typography variant="h5">{props.id}</Typography>
      </Stack>
    </Stack>
  );
}

UserInfo.defaultProps = {
  image: 'https://via.placeholder.com/1080x1080/eee?text=1:1',
  name: 'คุณ สุกัญญา ศรีวิเศษ',
  id: '3000123475',
};
