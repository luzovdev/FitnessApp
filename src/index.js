import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';

import { Sidebar } from "./components/Sidebar/index";
import { Home } from './pages/home';
import { Exercises } from './pages/Exercises';
import { Calendar } from './pages/Calendar';
import { Calc } from './pages/Calc';

import { Provider } from 'react-redux';
import { store } from './redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='wrapper'>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />}>
            <Route index element={<Home />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/calc' element={<Calc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);


