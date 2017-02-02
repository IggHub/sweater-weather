var React = require('react')
var convertTemp = require('../helpers/utils').convertTemp;
var avgTemp = require('../helpers/utils').avgTemp;

function NoSweaterWeather(props){
  return (
    <div>No Sweater Weather</div>
  )
}

function SweaterWeather(props){
  return (
    <div>Sweater Weather</div>
  )
}

function Sweater (props) {
  if (props.forecastData.weather){
      console.log(props.forecastData)
  }
  return (
    <div>
      {props.isLoading === true
        ? <h1>Loading</h1>
      : convertTemp(props.forecastData.main.temp) > 60 ?
      <div>No sweater</div> : <div>Sweater </div>
      }
    </div>
  )
}

module.exports = Sweater;
