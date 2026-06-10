import React, { lazy } from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import PublicLayout from '@/components/layout/PublicLayout'

// Lazy-loaded page components
const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const Routes = () => (
  <RouterRoutes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      {/* Redirect all old routes to home with anchors */}
      <Route path="/about" element={<Navigate to="/#about" replace />} />
      <Route path="/projects" element={<Navigate to="/#projects" replace />} />
      <Route path="/services" element={<Navigate to="/#services" replace />} />
      <Route path="/contact" element={<Navigate to="/#contact" replace />} />
    </Route>
    <Route path="*" element={<NotFound/>} />
  </RouterRoutes>
)

export default Routes
