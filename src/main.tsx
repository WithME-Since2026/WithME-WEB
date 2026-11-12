import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import '@/common/styles/tokens.css';
import '@/common/styles/global.css';

import { App } from '@/app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
