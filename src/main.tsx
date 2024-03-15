import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from '@/router/index';
import { BrowserRouter } from 'react-router-dom';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
)
