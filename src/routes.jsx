import React, { Suspense, lazy } from 'react';
import { Routes as RouterRoutes, Route, Navigate, Outlet } from 'react-router-dom';
import Loader from '@/components/common/Loader';
import Login from '@/pages/admin/Login';
import Dashboard from '@/pages/admin/Dashboard';

import PublicLayout from '@/components/layout/PublicLayout';

// Lazy-loaded page components for public site
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Admin layout that protects admin routes
const AdminLayout = () => {
  const isAuth = localStorage.getItem('adminAuth') === 'true';
  return isAuth ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

const Routes = () => (
  <RouterRoutes>
    {/* Public routes */}
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
    
    {/* Admin routes */}
    <Route path="/admin/login" element={<Login />} />
    <Route element={<AdminLayout />}>
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Route>
    {/* Catch‑all */}
    <Route path="*" element={<NotFound />} />
  </RouterRoutes>
);

export default Routes;
