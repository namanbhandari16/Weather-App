import React from 'react';
import Weather from './Components/Weather';
import SearchBar from './Components/SearchBar';
import './App.css';
 const api_key = '###############################';

class App extends React.Component {
  constructor(){
    super();
    this.state={disp:false};
    //this.getWeather();
  };
  getWeather = async(term)  =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);
    this.setState({
      city:response.name,
      country:response.sys.country,
      temp:parseInt(response.main.temp-273.15),
      temp_min:parseInt(response.main.temp_min-273.15),
      temp_max:parseInt(response.main.temp_max-273.15),
      wind:parseInt(response.wind.speed*3.6),
      desc:response.weather[0].description,
      disp:true
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Weather App</h1>
      </header>
      <main >
      <SearchBar onSubmit={this.getWeather} className="search"/>
      {this.state.disp ?(
                    <Weather city={this.state.city} country={this.state.country} temp={this.state.temp} temp_min={this.state.temp_min} temp_max={this.state.temp_max} wind={this.state.wind} desc={this.state.desc}/>

           ) : (
             <div></div>
           )}
      </main>
    </div>
  );}
}

export default App;
