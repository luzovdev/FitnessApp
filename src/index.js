import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';

import { FitnessApp } from './pages/FintessApp';
import { Exercises } from './pages/Exercises';
import { Exercise } from './pages/Exercise';
import { Calendar } from './pages/Calendar';
import { Calc } from './pages/Calc';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<FitnessApp />} />
      <Route path='/exercises' element={<Exercises />} />
      <Route path='/exercise' element={<Exercise />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/calc' element={<Calc />} />
    </Routes>
  </BrowserRouter>
);
