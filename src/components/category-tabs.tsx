import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid, Icon, Tab } from '@mui/material';
import * as React from 'react';

import IconPointCoin from '../assets/img/icon-point-coin.svg';

import { CardItem } from './card-item';

function MenuIcon(props: { source?: any }) {
  return (
    <Icon sx={{ '& img': { width: 22, filter: 'grayscale(100%)', fontSize: 'initial' } }}>
      <img alt="menu icon" src={props.source} />
    </Icon>
  );
}

export function CategoryTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box
          sx={(theme) => ({
            bgcolor: 'background.paper',
            '& .MuiTab-root': {
              ...theme.typography.body2,
              color: 'grey.500',
              fontSize: '0.875rem',
              textTransform: 'capitalize',
              minWidth: 80,
              width: 80,
              minHeight: 70,
              height: 70,
              p: 0,
            },
            '& .MuiTab-root.Mui-selected': {
              color: 'primary.main',
            },
            '& .MuiTab-root.Mui-selected img': {
              filter: 'grayscale(0)',
            },
            '& .MuiIcon-root': {
              fontSize: 'unset',
            },
            '& .MuiTabScrollButton-root': {
              width: 18,
            },
            '& .MuiTabs-indicator': {
              width: '42px !important',
              height: 3,
              borderRadius: 20,
              marginLeft: '19px',
            },
          })}
        >
          <TabList aria-label="category list" onChange={handleChange} variant="scrollable">
            <Tab icon={<MenuIcon source={IconPointCoin} />} label="all" value="1" />
            <Tab icon={<MenuIcon source={IconPointCoin} />} label="Shopping" value="2" />
            <Tab icon={<MenuIcon />} label="Lifestyle" value="3" />
            <Tab icon={<MenuIcon />} label="Travel" value="4" />
            <Tab icon={<MenuIcon />} label="Fashion" value="5" />
            <Tab icon={<MenuIcon />} label="Others" value="6" />
            <Tab icon={<MenuIcon />} label="Others" value="7" />
            <Tab icon={<MenuIcon />} label="Others" value="8" />
            <Tab icon={<MenuIcon />} label="Others" value="9" />
          </TabList>
        </Box>
        <TabPanel sx={{ p: 8 }} value="1">
          <Grid spacing={8} container>
            <Grid xs={6} container item>
              <Box sx={{ mb: 4 }}>
                <CardItem />
              </Box>
            </Grid>
            <Grid xs={6} container item>
              <Box sx={{ mb: 4 }}>
                <CardItem />
              </Box>
            </Grid>
            <Grid xs={6} container item>
              <Box sx={{ mb: 4 }}>
                <CardItem />
              </Box>
            </Grid>
            <Grid xs={6} container item>
              <Box sx={{ mb: 4 }}>
                <CardItem />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">Shopping</TabPanel>
        <TabPanel value="3">Lifestyle</TabPanel>
        <TabPanel value="4">Travel</TabPanel>
        <TabPanel value="5">Fashion</TabPanel>
        <TabPanel value="6">Lifestyle</TabPanel>
        <TabPanel value="7">Others</TabPanel>
        <TabPanel value="8">Others</TabPanel>
        <TabPanel value="9">Others</TabPanel>
      </TabContext>
    </Box>
  );
}

MenuIcon.defaultProps = {
  source: 'https://via.placeholder.com/22x22/eee?text=1:1',
};
