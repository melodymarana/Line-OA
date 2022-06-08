import { Icon, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

type PageNavbarType = {
  title?: string;
  previousLink?: string;
};

const NavLink = styled(Link)({
  width: 22,
  height: 22,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  textDecoration: 'none',
});

export function PageNavbar(props: PageNavbarType): JSX.Element {
  return (
    <Stack
      alignItems="center"
      component="nav"
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={(theme) => ({
        p: 8,
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      })}
    >
      <NavLink href={props.previousLink}>
        <Icon baseClassName="fal" className="fa-angle-left" sx={{ fontSize: 28 }} />
      </NavLink>
      <Typography variant="h5">{props.title}</Typography>
      <NavLink href="#">
        <Icon baseClassName="fal" className="fa-times" sx={{ fontSize: 22 }} />
      </NavLink>
    </Stack>
  );
}

PageNavbar.defaultProps = {
  title: 'ตลาดสด CP',
  previousLink: '/',
};
