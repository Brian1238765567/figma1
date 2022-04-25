

import React, { Component } from 'react'
import './App.css';
import {AddMovie,MovieBar,MovieComp,MovieCompCollection} from "./ui-components";
import { Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    const navbarOverrides = {"image": { height:"34px", src: "https://img.icons8.com/color/50/000000/car--v1.png", },};
    return (
        <div className="App">
          <Routes>
            <Route exact path='/' element={<div><MovieBar overrides={navbarOverrides}/>    <MovieCompCollection/> <MovieComp/>  <AddMovie/>     </ div>} />

          </Routes>


        </div>
    );
}
}

export default App;

