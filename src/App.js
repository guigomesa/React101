import React, {Component} from "react";

import './styles.css';

import Main from "./pages/main";

import Header from './components/header';
import Routes from "./routes";


const App = () => (
  <div className="App">
      <Header/>
      <Routes/>
    </div>
)

export default App;
