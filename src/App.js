import React, { Component } from 'react';
import classes from './App.module.css';
import {Cards,Chart,CountryPicker} from './Components/index'
import {fetchData} from './api/index'
class App extends Component{
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fetchedData=await fetchData()
    this.setState({data:fetchedData})
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  render(){
    const data=this.state.data
    return(
      <div className={classes.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={this.state.country}/>
      </div>
    )
  }
}

export default App;
