import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Address } from './Address';

import {UserProvider} from './context/LoginContext'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserProvider>
    <React.StrictMode>
      <Address />
    </React.StrictMode>
  </UserProvider>
);
