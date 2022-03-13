import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Login from './pages/Login';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
