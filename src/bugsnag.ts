import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import React from 'react';

const apiKey: string = window.config?.VITE_BUGSNAG_API_KEY ?? '';
const releaseStage = window.config?.VITE_BUGSNAG_RELEASE_STAGE ?? 'development';

Bugsnag.start({
  apiKey,
  plugins: [new BugsnagPluginReact()],
  appVersion: '1.0.0',
  collectUserIp: false,
  enabledReleaseStages: ['staging', 'uat', 'production', 'alpha'],
  releaseStage,
});

export const ErrorBoundary =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: complain getPlugin may be undefined
  Bugsnag.getPlugin('react').createErrorBoundary(React);
