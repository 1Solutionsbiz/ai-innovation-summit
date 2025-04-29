import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PartnerForm from './PartnerForm';
import RegistrationForm from './RegistrationForm';

const Dashboard: React.FC = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Navigate to="partner-form" replace />} />
      <Route path="partner-form" element={<PartnerForm/>} />
      <Route path="registration-form" element={<RegistrationForm />} />
    </Route>
  </Routes>
);

export default Dashboard;
