import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '@/shared/components/LoadingSpinner';

const PublicRoute = ({ children, restricted = false }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // If restricted and user is logged in, redirect to dashboard
  if (restricted && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;