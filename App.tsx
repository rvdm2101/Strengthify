import React from 'react';
import { AuthProvider } from '@context/AuthContext';
import AppNavigation from 'AppNavigation';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
