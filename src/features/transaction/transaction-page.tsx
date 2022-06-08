import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Button, Box, Icon, Stack, Tab, Typography, List, ListItemButton } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { PageHeading } from '../../components/page-heading';
import { PointsAmount } from '../../components/points-amount';
import { SectionHeading } from '../../components/section-heading';

export function TransactionPage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <PageHeading title="คะแนนสะสม" />
      <Stack alignItems="center" sx={{ textAlign: 'center', bgcolor: 'background.paper', py: 8 }}>
        <Box sx={{ mb: 4 }}>
          <PointsAmount amount="999,999" />
        </Box>
        <Typography sx={{ color: 'grey.600' }} variant="body2">
          ระดับของคุณ : เงิน (ได้รับคะแนน 1 เท่า)
        </Typography>
        <Typography sx={{ mb: 4 }} variant="body2">
          2,000 คะแนน หมดอายุ 31 ธ.ค. 2565
        </Typography>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        sx={{
          bgcolor: 'background.paper',
          px: 8,
          py: 6,
          marginTop: '1px',
          marginBottom: '4px',
        }}
      >
        <Typography variant="body1">เงื่อนไขการรับคะแนนสะสม</Typography>
        <Button
          component={Link}
          sx={{
            display: 'flex',
            alignItems: 'center',
            minWidth: 10,
            height: 10,
            p: 0,
          }}
          to="/custom-condition-page"
        >
          <Icon className="fal fa-chevron-right" sx={{ fontSize: 18 }} />
        </Button>
      </Stack>
      <Box component="section" sx={{ bgcolor: 'background.paper' }}>
        <SectionHeading title="ประวัติการได้รับคะแนน" />
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box
              sx={(theme) => ({
                '& .MuiTab-root': {
                  ...theme.typography.h5,
                  color: 'grey.500',
                  textTransform: 'capitalize',
                  minHeight: 50,
                  p: 0,
                },
                '& .MuiTab-root.Mui-selected': {
                  color: 'grey.900',
                },
              })}
            >
              <TabList
                aria-label="category list"
                onChange={handleChange}
                sx={{ borderBottom: 1, borderColor: 'grey.400' }}
                variant="fullWidth"
              >
                <Tab label="ทั้งหมด" value="1" />
                <Tab label="ได้รับคะแนน" value="2" />
                <Tab label="ใช้คะแนน" value="3" />
              </TabList>
            </Box>
            <TabPanel sx={{ p: 0 }} value="1">
              <List sx={{ p: 0 }}>
                <ListItemButton
                  component={Link}
                  sx={{ p: 8, width: '100%', borderBottomWidth: 1, borderColor: 'grey.400', display: 'block' }}
                  to="/transaction/detail"
                >
                  <Stack direction="row" justifyContent="space-between" sx={{ mb: 2, flex: 1 }}>
                    <Typography component="p" variant="h6">
                      คูปองส่วนลด 10 บาท ใช้ที่ซีพี เฟรช
                    </Typography>
                    <Typography component="p" variant="h6">
                      - 1,000
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography component="p" sx={{ color: 'grey.600' }} variant="caption">
                      31 ส.ค. 64, 11:43
                    </Typography>
                    <Typography component="p" sx={{ color: 'success.main' }} variant="caption">
                      สำเร็จ
                    </Typography>
                  </Stack>
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  sx={{
                    p: 8,
                    width: '100%',
                    border: '1px solid',
                    borderColor: 'grey.400',
                    display: 'block',
                  }}
                  to="/transaction/detail"
                >
                  <Stack direction="row" justifyContent="space-between" sx={{ mb: 2, flex: 1 }}>
                    <Typography component="p" variant="h6">
                      คูปองส่วนลด 10 บาท ใช้ที่ซีพี เฟรช
                    </Typography>
                    <Typography component="p" variant="h6">
                      - 1,000
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography component="p" sx={{ color: 'grey.600' }} variant="caption">
                      31 ส.ค. 64, 11:43
                    </Typography>
                    <Typography component="p" sx={{ color: 'error.main' }} variant="caption">
                      ยกเลิก
                    </Typography>
                  </Stack>
                </ListItemButton>
              </List>
            </TabPanel>
            <TabPanel value="2">Item</TabPanel>
            <TabPanel value="3">Item</TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}
