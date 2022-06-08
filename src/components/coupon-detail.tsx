import { Divider, Icon, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import * as React from 'react';

import IconPoint from '../assets/img/icon-point.svg';

function ListDivider() {
  return <Divider component="li" sx={{ marginLeft: '40px' }} variant="inset" />;
}

function ListIcon({ icon }: { icon: JSX.Element }) {
  return (
    <ListItemIcon
      sx={{
        minWidth: 28,
        width: 28,
        mr: 6,
        mt: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiIcon-root': {
          color: 'grey.500',
          fontSize: '22px',
        },
        '& img': {
          minWidth: 22,
          width: 22,
        },
      }}
    >
      {icon}
    </ListItemIcon>
  );
}

export function CouponDetail() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', p: 0 }}>
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<Icon className="fal fa-info-circle" />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                Transaction ID
              </Typography>
              <Typography component="p" variant="h5">
                00982113
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<img alt="icon point" src={IconPoint} />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                ใช้คะแนนไป
              </Typography>
              <Typography component="p" variant="h5">
                - 1,000 คะแนน
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<Icon className="fal fa-calendar" />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                เมื่อวันที่
              </Typography>
              <Typography component="p" variant="h5">
                08 ก.ย. 64, 15:32
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<Icon className="fal fa-ticket" />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                รหัส
              </Typography>
              <Typography component="p" variant="h5">
                CP67392
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<Icon className="fal fa-info-circle" />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                สถานะการใช้คะแนน
              </Typography>
              <Typography component="p" sx={{ color: 'success.main' }} variant="h5">
                สำเร็จ
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<Icon className="fal fa-info-circle" />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                สถานะการใช้คูปอง
              </Typography>
              <Typography component="p" sx={{ color: 'warning.main' }} variant="h5">
                รอการใช้งาน
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<Icon className="fal fa-info-circle" />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                สถานะการใช้คูปอง
              </Typography>
              <Typography component="p" sx={{ color: 'error.main' }} variant="h5">
                ยกเลิก
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
      <ListItem alignItems="center" sx={{ px: 0 }}>
        <ListIcon icon={<Icon className="fal fa-calendar" />} />
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary' }}>
              <Typography component="p" variant="body1">
                ยกเลิกเมื่อวันที่
              </Typography>
              <Typography component="p" variant="h5">
                15 ก.พ. 64, 12:49
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      <ListDivider />
    </List>
  );
}
