import React from 'react';
import AuthProvider from './src/components/AuthProvider';

export const wrapRootElement = ({ element }) => <AuthProvider>{element}</AuthProvider>;
