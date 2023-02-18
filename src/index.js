import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';

import { Sidebar } from "./components/Sidebar/index";
import { Home } from './pages/home';
import { Exercises } from './pages/Exercises';
import { Exercise } from './pages/Exercise';
import { Calendar } from './pages/Calendar';
import { Calc } from './pages/Calc';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/calc' element={<Calc />} />
      </Route>
    </Routes>
  </BrowserRouter>
);



// <Route path='/' element={<Header />}>
//   <Route index element={<Shop />} />
//   <Route path='contacts' element={<Contacts />} />
//   <Route path='cart' element={<Cart />} />
//   <Route path='product/:productId' element={<Product />} />
//   <Route path='product' element={<Navigate to='/' />} />
//   <Route path='*' element={<NotFound />} />
// </Route>