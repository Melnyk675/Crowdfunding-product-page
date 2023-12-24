import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/App.jsx';
import { DataProvider } from '/src/Context/Context.jsx';

function Index() {
  return (
    <React.StrictMode>
      <DataProvider>
      <Home />
      </DataProvider>
    </React.StrictMode>
  );
}

export default Index;

