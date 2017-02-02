var React = require('react')

function Sweater (props) {
  console.log(props.forecastData.name);//how to get weather data?
  return (
    <div>
      {props.isLoading === true
        ? <h1>Loading</h1>
      : <div>Hello!</div>}
    </div>
  )
}

module.exports = Sweater;
