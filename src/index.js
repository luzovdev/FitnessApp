import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';

import { Sidebar } from "./components/Sidebar/index";
import { Home } from './pages/Home';
import { Exercises } from './pages/Exercises';
import { Scheduler } from './pages/Scheduler';
import { ExerciseDetail } from './pages/ExerciseDetail'
import { NotFound } from './pages/NotFound';

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
            <Route path='/scheduler' element={<Scheduler />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);


