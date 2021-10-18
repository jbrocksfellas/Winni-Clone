import React from 'react'
import { Header } from './Header';
import { Slider1 } from './Slider1';
import { MenuBar } from './MenuBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  function App() {
  
    return (
        <>
        <Header />
        <Slider1 />
        <MenuBar />
        </>
    );
  }
  
  export default App;
