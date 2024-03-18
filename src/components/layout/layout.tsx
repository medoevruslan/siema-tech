import React from 'react';
import { ToastContainer } from 'react-toastify';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ToastContainer />
      {children}
    </div>
  );
}
