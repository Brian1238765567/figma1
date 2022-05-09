import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { MovieBar,UiEdit } from "./ui-components";
import { DataStore } from "@aws-amplify/datastore";
import { Movie } from "./models";
import { useState, useEffect } from "react";
import "./App.css";

class EditMovie extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    const { cid } = useParams();
    const [cr, setMe] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const found = await DataStore.query(Movie, c => c.id("eq", cid));
            console.log("This s/b an array object:  ");
            console.log(found);
        setMe(found[0]);
            // console.log("Look! the name field: " + found[0].name); //.Name?
        }
        pullData()
      }, []) 
    return (
      <div><header className="App-header">
        <MovieBar />
        <UiEdit fx={cr}/>
        </header></div>
      );
    }

export default EditMovie