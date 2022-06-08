import * as React from 'react';

import { CategoryTabs } from '../../components/category-tabs';
import { PageHeading } from '../../components/page-heading';
import { PointsBar } from '../../components/points-bar';

export function PrivilegePage() {
  return (
    <>
      <PointsBar />
      <PageHeading linkPath="/privilege/history" linkText="ประวัติ" title="แลกสิทธิพิเศษ" />
      <CategoryTabs />
    </>
  );
}
