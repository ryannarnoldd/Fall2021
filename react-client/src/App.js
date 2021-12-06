import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import OurRoutes from './OurRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <OurRoutes />
        <ToastContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;
