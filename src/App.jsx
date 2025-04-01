import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '@/modules/auth/components/ProtectedRoute';
import PublicRoute from '@/modules/auth/components/PublicRoute';
import LandingPage from '@/app/pages/LandingPage';
import Auth from '@/modules/auth/components/Auth';
import NotFound from '@/app/pages/NotFound';
import Dashboard from '@/app/pages/Dashboard';
import ZaptBadge from '@/shared/components/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-dark-800">
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          } 
        />
        <Route 
          path="/auth" 
          element={
            <PublicRoute restricted>
              <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Auth />
              </div>
            </PublicRoute>
          } 
        />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard/*" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <ZaptBadge />
    </div>
  );
}