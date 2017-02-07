var React = require('react')

function SweaterWeather(props){
  return (
    <div>
      <h1>Sweater Weather</h1>
      <p>{props.temp} degrees</p>
    </div>
  )
}

function NoSweaterWeather(props){
  return (
    <div>
      <h1>NO Sweater Weather</h1>
      <p>{props.temp} degrees</p>
    </div>
  )
}

module.exports = {
  SweaterWeather: SweaterWeather,
  NoSweaterWeather: NoSweaterWeather
};
