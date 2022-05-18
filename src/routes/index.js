import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home';
import Video from '../pages/Video';
import Desconto from '../pages/Desconto';

function Rota(){
  return (
   
    <BrowserRouter basename='/'>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="video/:home" element={<Video />} />
        <Route path="desconto" element={<Desconto />} />
    </Routes>
  </BrowserRouter>

     
      
        
      
  
  );
}

export default Rota;
