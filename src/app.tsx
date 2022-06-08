import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AlertDialog } from './components/alert-dialog';
import { BenefitsDetail } from './features/benefits/benefits-detail';
import { BenefitsPage } from './features/benefits/benefits-page';
import { CouponCode } from './features/coupon-code';
import { CustomConditionsPage } from './features/page/custom-conditions-page';
import { CustomPage } from './features/page/custom-page';
import { MemberLevel } from './features/page/member-level';
import { PrivilegeDetail } from './features/privilege/privilege-detail';
import { PrivilegeHistory } from './features/privilege/privilege-history';
import { PrivilegeHistoryDetail } from './features/privilege/privilege-history-detail';
import { PrivilegePage } from './features/privilege/privilege-page';
import { SummaryPoints } from './features/summary-points';
import { TermsConditions } from './features/terms-conditions';
import { TransactionDetail } from './features/transaction/transaction-detail';
import { TransactionPage } from './features/transaction/transaction-page';
import { Layout } from './layout';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<BenefitsPage />} path="*" />
        <Route element={<BenefitsDetail />} path="benefits/detail" />
        <Route element={<PrivilegePage />} path="privilege" />
        <Route element={<PrivilegeDetail />} path="privilege/detail" />
        <Route element={<PrivilegeHistory />} path="privilege/history" />
        <Route element={<PrivilegeHistoryDetail />} path="privilege/history-detail" />
        <Route element={<TransactionPage />} path="transaction" />
        <Route element={<TransactionDetail />} path="transaction/detail" />
        <Route element={<CouponCode />} path="qrcode" />
        <Route element={<CustomPage />} path="custom-page" />
        <Route element={<CustomConditionsPage />} path="custom-condition-page" />
        <Route element={<MemberLevel />} path="member-level" />
        <Route element={<AlertDialog />} path="alert-dialog" />
        <Route element={<TermsConditions />} path="terms-conditions" />
        <Route element={<SummaryPoints />} path="summary-points" />
      </Route>
    </Routes>
  );
}
