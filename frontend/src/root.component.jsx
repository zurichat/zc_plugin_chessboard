import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import The Base React Application
import App from './App';

export default function Root({ baseName }) {
  return (
    <BrowserRouter>
      <App baseName={baseName} />
    </BrowserRouter>
  );
}
