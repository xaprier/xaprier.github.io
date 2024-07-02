import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './components/main.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage config={CONFIG} />
  </React.StrictMode>,
);
