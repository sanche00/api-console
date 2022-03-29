import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Routes  } from 'react-router-dom'
import './index.css';
// import App from './App';
import MainLayout from './components/common/layout/MainLayout'
import reportWebVitals from './reportWebVitals';

import Users from './pages/TestApi';
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
      <Routes>
        <Route path="/aaa" element={<Users />} />
        <Route path="/about" element='<div>bbb</div>' />
      </Routes>
      </MainLayout>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
