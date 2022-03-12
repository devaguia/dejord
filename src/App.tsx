import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Login from './pages/Login';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
