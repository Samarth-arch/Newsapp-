// import logo from './logo.svg';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setALert] = useState(null)
  const showalert = (message, type) => {
    setALert({
      msg: message,
      type: type
    })
  }
  const togglebtn = () => {
    if (mode === 'light') {
      setmode('dark')
      showalert("darkMode enabled", 'success')
    }
    else {
      setmode('light')
      showalert("darkMode Disenabled", 'warning')
    }
    setTimeout(() => {
      setALert(null)
    }
      , 1500)

  }
  return (
    <>
    <Router>
      <Navbar Mmode={mode} togglebtn={togglebtn} />
      <Alert alert={alert} />
      <div className='container my-5'>
        <Switch>
            <Route exact path="/about">
              <AboutUs/>
            </Route>
            <Route exact path="/">
              <TextForm Mmode={mode} togglebtn={togglebtn}/>
            </Route>
        </Switch>
      </div>
        </Router>
    </>
  );
}

export default App;
