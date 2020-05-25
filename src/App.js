import React, { Component } from 'react';
import classes from './App.module.css';
import {Cards,Chart,CountryPicker} from './Components/index'
class App extends Component{
  render(){
    return(
      <div className={classes.container}>
        <Cards/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App;
