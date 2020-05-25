import React, { Component } from 'react';
import classes from './App.module.css';
import {Cards,Chart,CountryPicker} from './Components/index'
import {fetchData} from './api/index'
class App extends Component{
  state={
    data:{}
  }
  async componentDidMount(){
    const fetchedData=await fetchData()
    this.setState({data:fetchedData})
  }
  render(){
    const data=this.state.data
    return(
      <div className={classes.container}>
        <Cards data={data}/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App;
