import React, { Component } from 'react'
import { AddMovie,  MovieBar } from "./ui-components";
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import { DataStore } from '@aws-amplify/datastore';
import { Movie } from './models';

class CreateMovie extends Component {
    render(){
        return (<PutMovie />);
    }
}

  function PutMovie() {
    const navbarOverrides = {"image": { height:"34px", src: "https://img.icons8.com/color/50/000000/car--v1.png", },};
      return (
        <div>
            <MovieBar overrides={navbarOverrides} />
            <AddMovie style={{ textAlign: "left"}} />
        </div>
      );
    }

export default CreateMovie