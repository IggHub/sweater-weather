var React = require('react')
var SweaterWeather = require('./SweaterUI').SweaterWeather;
var NoSweaterWeather = require('./SweaterUI').NoSweaterWeather;
var convertTemp = require('../helpers/utils').convertTemp;
var avgTemp = require('../helpers/utils').avgTemp;

function NoSweaterWeather(props){
  return (
    <div>No Sweater Weather</div>
  )
}

function Sweater (props) {
  if (props.forecastData.weather){
      console.log(props.forecastData)
      var temp = convertTemp(props.forecastData.main.temp);
  }

  console.log('temp', temp);
  return (
    <div>
      {props.isLoading === true
        ? <h1>Loading</h1>
      : {temp} > 60 ?
      <NoSweaterWeather temp={temp}/> : <SweaterWeather temp={temp}/>
      }
    </div>
  )
}

module.exports = Sweater;
