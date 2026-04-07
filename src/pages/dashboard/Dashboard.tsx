import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PartnerForm from './PartnerForm';
import RegistrationForm from './RegistrationForm';
import BengaloreRegistrationForm from './BengaloreRegistrationForm';
import DelhhiRegistrationForm from './DelhhiRegistrationForm';

const Dashboard: React.FC = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Navigate to="partner-form" replace />} />
      <Route path="partner-form" element={<PartnerForm/>} />
      <Route path="registration-form" element={<RegistrationForm />} />
      <Route path="bengaluru-registration-form" element={<BengaloreRegistrationForm />} />
      {/* <Route path="delhi-registration-form" element={<BengaloreRegistrationForm />} /> */}
      {/* <Route path="delhi1-registration-form" element={<DelhhiRegistrationForm />} /> */}
    </Route>
  </Routes>
);

export default Dashboard;
