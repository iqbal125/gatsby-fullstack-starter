import React from 'react';
import ContextProvider from './src/components/ContextProvider';

export const wrapRootElement = ({ element }) => <ContextProvider>{element}</ContextProvider>;
