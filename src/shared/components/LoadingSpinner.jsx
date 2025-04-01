import React from 'react';

const sizes = {
  xs: 'w-4 h-4 border-2',
  sm: 'w-6 h-6 border-2',
  md: 'w-8 h-8 border-3',
  lg: 'w-12 h-12 border-4',
  xl: 'w-16 h-16 border-4'
};

const LoadingSpinner = ({ size = 'md', color = 'primary', className = '' }) => {
  const sizeClasses = sizes[size] || sizes.md;
  const colorClass = `border-t-${color}-600`;
  
  return (
    <div className={`${sizeClasses} ${colorClass} border-gray-200 rounded-full animate-spin ${className}`}></div>
  );
};

export default LoadingSpinner;