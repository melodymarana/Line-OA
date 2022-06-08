import { Box, List, ListItemButton, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { PageHeading } from '../../components/page-heading';
import { PointsAmount } from '../../components/points-amount';
import { PointsBar } from '../../components/points-bar';

export function PrivilegeHistory() {
  return (
    <>
      <PointsBar />
      <PageHeading title="ประวัติการแลกสิทธิพิเศษ" />
      <Box component="section" sx={{ bgcolor: 'background.paper' }}>
        <List sx={{ p: 0 }}>
          <ListItemButton
            component={Link}
            sx={{
              py: 6,
              px: 8,
              borderBottom: '1px solid',
              borderColor: 'divider',
              display: 'flex',
            }}
            to="/privilege/history-detail"
          >
            <Stack
              sx={{
                '& img': {
                  width: 82,
                  height: 62,
                  objectFit: 'cover',
                  borderWidth: 1,
                  borderRadius: 2,
                },
              }}
            >
              <img alt="" src="https://via.placeholder.com/1080x720/ddd?text=3:2" />
            </Stack>
            <Stack sx={{ ml: 4 }}>
              <Typography
                sx={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  mb: 1,
                }}
                variant="h6"
              >
                คูปองส่วนลดท้ายบิล ราคา 100 บาท ใช้หน้าร้านค้า แลก...
              </Typography>
              <Typography component="p" sx={{ color: 'grey.600' }} variant="caption">
                31 ส.ค. 64, 11:43
              </Typography>
            </Stack>
            <Stack sx={{ ml: 4, alignItems: 'flex-end', textAlign: 'right', flex: 1, minWidth: 100 }}>
              <PointsAmount amount="1,000" size="h6" />
              <Typography component="p" sx={{ color: 'warning.main', mt: '3px' }} variant="body2">
                รอการใช้งาน
              </Typography>
            </Stack>
          </ListItemButton>
          <ListItemButton
            component={Link}
            sx={{
              py: 6,
              px: 8,
              borderBottom: '1px solid',
              borderColor: 'divider',
              display: 'flex',
            }}
            to="/privilege/history-detail"
          >
            <Stack
              sx={{
                '& img': {
                  width: 82,
                  height: 62,
                  objectFit: 'cover',
                  borderWidth: 1,
                  borderRadius: 2,
                },
              }}
            >
              <img alt="" src="https://via.placeholder.com/1080x720/ddd?text=3:2" />
            </Stack>
            <Stack sx={{ ml: 4 }}>
              <Typography
                sx={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  mb: 1,
                }}
                variant="h6"
              >
                คูปองส่วนลดท้ายบิล ราคา 100 บาท ใช้หน้าร้านค้า แลก...
              </Typography>
              <Typography component="p" sx={{ color: 'grey.600' }} variant="caption">
                31 ส.ค. 64, 11:43
              </Typography>
            </Stack>
            <Stack sx={{ ml: 4, alignItems: 'flex-end', textAlign: 'right', flex: 1, minWidth: 100 }}>
              <Typography component="p" variant="h6">
                รับสิทธิ์ฟรี
              </Typography>
              <Typography component="p" sx={{ color: 'success.main', mt: '3px' }} variant="body2">
                สำเร็จ
              </Typography>
            </Stack>
          </ListItemButton>
          <ListItemButton
            component={Link}
            sx={{
              py: 6,
              px: 8,
              borderBottom: '1px solid',
              borderColor: 'divider',
              display: 'flex',
            }}
            to="/privilege/history-detail"
          >
            <Stack
              sx={{
                '& img': {
                  width: 82,
                  height: 62,
                  objectFit: 'cover',
                  borderWidth: 1,
                  borderRadius: 2,
                },
              }}
            >
              <img alt="" src="https://via.placeholder.com/1080x720/ddd?text=3:2" />
            </Stack>
            <Stack sx={{ ml: 4 }}>
              <Typography
                sx={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  mb: 1,
                }}
                variant="h6"
              >
                คูปองส่วนลดท้ายบิล ราคา 100 บาท ใช้หน้าร้านค้า แลก...
              </Typography>
              <Typography component="p" sx={{ color: 'grey.600' }} variant="caption">
                31 ส.ค. 64, 11:43
              </Typography>
            </Stack>
            <Stack sx={{ ml: 4, alignItems: 'flex-end', textAlign: 'right', flex: 1, minWidth: 100 }}>
              <PointsAmount amount="2,500" size="h6" />
              <Typography component="p" sx={{ color: 'error.main', mt: '3px' }} variant="body2">
                ยกเลิก
              </Typography>
            </Stack>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
