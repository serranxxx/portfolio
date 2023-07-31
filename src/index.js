import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';

import { BrowserRouter } from 'react-router-dom';
import { Portfolio } from './Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
   <Portfolio />
  </BrowserRouter>

);
