import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './css/style.css';
import Myloginpage from './modules/auth/Myloginpage';
import {Routes, Route,BrowserRouter} from "react-router-dom"
import Myregisterpage from './modules/auth/Myregisterpage';
import CustomTable from './modules/dashboard/CustomTable';
import Mainpage from './modules/dashboard/Mainpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
// import Myheaderpage from './modules/shares/Myheaderpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='' element={<Myloginpage/>}></Route>
      <Route path='dashboard/register'element={<Myregisterpage/>}></Route>
      <Route path='register'element={<Myregisterpage/>}></Route>
      <Route path='dashboard'element={<CustomTable/>}></Route>
      <Route path='' element={<Mainpage/>}></Route>
      <Route path='' element={<Mylandingpage/>}></Route>
      {/* <Route path='shares' element={<Myheaderpage/>}></Route> */}

      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);



