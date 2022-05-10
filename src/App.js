

import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {MovieBar,MovieCompCollection} from "./ui-components";
import { Routes, Route } from 'react-router-dom'
import CreateMovie from './CreateMovie'
import EditMovie from './EditMovie';

class App extends Component {
  render() {
    const navbarOverrides = {"image": { height:"34px", src: "https://img.icons8.com/color/50/000000/car--v1.png", },};
    return (
        <div className="App">
          <Routes>
            <Route exact path='/' element={<div><MovieBar overrides={navbarOverrides}/> <MovieCompCollection/> </ div>} />
            <Route exact path='/newmovie' element={<CreateMovie/>} />
            <Route exact path='/edit/:cid' element={<EditMovie/>} />
          </Routes>


        </div>
    );
}
}

export default withAuthenticator(App);
