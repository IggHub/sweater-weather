var React = require('react')

function SweaterWeather(props){
  return (
    <div>Sweater Weather</div>
  )
}

function NoSweaterWeather(props){
  return (
    <div>NO Sweater Weather</div>
  )
}

module.exports = {
  SweaterWeather: SweaterWeather,
  NoSweaterWeather: NoSweaterWeather
};
