import { Button, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { ScrollDialog } from '../components/scroll-dialog';

export function TermsConditions() {
  return (
    <ScrollDialog
      content={
        <Typography component="p" variant="body2">
          Lorem ipsum dolor sit amet. tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget
          magna. Turpis cursus in hac habitasse. Sit amet est placerat in egestas. Libero enim sed faucibus turpis in eu
          mi. Semper auctor neque vitae tempus quam. A diam sollicitudin tempor id. Magna fermentum iaculis eu non diam
          phasellus vestibulum. Leo duis ut diam quam nulla. Non nisi est sit amet facilisis magna etiam tempor orci.
          Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Tincidunt dui ut ornare lectus sit. Mauris
          rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nunc id cursus metus aliquam eleifend mi. Id
          cursus metus aliquam eleifend mi. Ultrices tincidunt arcu non sodales neque. Tortor vitae purus faucibus
          ornare suspendisse sed nisi lacus. In mollis nunc sed id semper risus in hendrerit. Aenean pharetra magna ac
          placerat vestibulum lectus. Vitae congue mauris rhoncus aenean vel. Scelerisque fermentum dui faucibus in
          ornare quam viverra. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Lectus quam id leo in. Venenatis a condimentum
          vitae sapien. Vel pretium lectus quam id Leo in.
          <br />
          Lorem ipsum dolor sit amet. tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget
          magna. Turpis cursus in hac habitasse. Sit amet est placerat in egestas. Libero enim sed faucibus turpis in eu
          mi. Semper auctor neque vitae tempus quam. A diam sollicitudin tempor id. Magna fermentum iaculis eu non diam
          phasellus vestibulum. Leo duis ut diam quam nulla. Non nisi est sit amet facilisis magna etiam tempor orci.
          Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Tincidunt dui ut ornare lectus sit. Mauris
          rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nunc id cursus metus aliquam eleifend mi. Id
          cursus metus aliquam eleifend mi. Ultrices tincidunt arcu non sodales neque. Tortor vitae purus faucibus
          ornare suspendisse sed nisi lacus. In mollis nunc sed id semper risus in hendrerit. Aenean pharetra magna ac
          placerat vestibulum lectus. Vitae congue mauris rhoncus aenean vel. Scelerisque fermentum dui faucibus in
          ornare quam viverra. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Lectus quam id leo in. Venenatis a condimentum
          vitae sapien. Vel pretium lectus quam id Leo in.
        </Typography>
      }
      footer={
        <Stack direction="row" spacing={6} width="100%">
          <Button color="info" variant="outlined" fullWidth>
            ไม่เข้าร่วม
          </Button>
          <Button component={Link} to="/" variant="contained" fullWidth>
            เข้าร่วม
          </Button>
        </Stack>
      }
      title="Term & Conditions : True"
    />
  );
}
