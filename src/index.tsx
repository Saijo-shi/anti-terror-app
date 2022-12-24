import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import '@elastic/eui/dist/eui_theme_dark.css';
import { EuiProvider } from '@elastic/eui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EuiProvider colorMode="dark">
      <App />
    </EuiProvider>
  </React.StrictMode>
);
