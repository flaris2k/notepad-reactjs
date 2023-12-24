import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotePage from './pages/NotePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>} path='/'/>
      <Route element={<NotePage/>} path='/note/:title' />
    </Routes>
    </BrowserRouter>
  </Provider>
);
