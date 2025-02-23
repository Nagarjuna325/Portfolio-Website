import React from 'react'

import {About , Footer , Header , Skills , Work} from './container';
// import About from './container/';
// import About from './container/About';
// import About from './container/About';
// import About from './container/About';
import './App.scss';

import { Navbar} from './components';
const App = () => {
  return (
    <div className ="app">
        <Navbar />
        <Header />
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default App