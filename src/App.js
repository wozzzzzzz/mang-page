import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Mainpage'; 
import Sub from './Subpage'; 
import Sub2 from './Subpage2'; 
import Sub3 from './Subpage3'; 
import Sub4 from './Subpage4'; 
import Sub5 from './Subpage5';
import Sub6 from './Subpage6'; 
import Fin from './Finpage';   


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} /> 
      <Route path='/Subpage' element={<Sub />} /> 
      <Route path='/Subpage2' element={<Sub2 />} /> 
      <Route path='/Subpage3' element={<Sub3 />} /> 
      <Route path='/Subpage4' element={<Sub4 />} /> 
      <Route path='/Subpage5' element={<Sub5 />} /> 
      <Route path='/Subpage6' element={<Sub6 />} /> 
      <Route path='/Finpage' element={<Fin />} /> 
    </Routes>
  );
};

export default App;