import { Box, Icon, Tab, Tabs } from '@mui/material';
import * as React from 'react';

import IconPointCoin from '../assets/img/icon-point-coin.svg';

export function MenuIcon(props: { source?: any }) {
  return (
    <Icon sx={{ '& img': { width: 22, filter: 'grayscale(100%)' } }}>
      <img alt="menu icon" src={props.source} />
    </Icon>
  );
}

export function MenuTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        aria-label="menu tabs"
        onChange={handleChange}
        sx={(theme) => ({
          '& .MuiTab-root': {
            ...theme.typography.body2,
            color: 'grey.500',
            fontSize: '0.875rem',
            textTransform: 'capitalize',
          },
          '& .MuiTab-root.Mui-selected': {
            color: 'primary.main',
          },
          '& .MuiTab-root.Mui-selected img': {
            filter: 'grayscale(0)',
          },
        })}
        value={value}
        centered
        scrollButtons
      >
        <Tab icon={<MenuIcon source={IconPointCoin} />} label="all" />
        <Tab icon={<MenuIcon source={IconPointCoin} />} label="Shopping" />
        <Tab icon={<MenuIcon />} label="Lifestyle" />
        <Tab icon={<MenuIcon />} label="Travel" />
      </Tabs>
    </Box>
  );
}

MenuIcon.defaultProps = {
  source: 'https://via.placeholder.com/22x22/eee?text=1:1',
};
