var React = require('react');
var ConvertTemp = require('../helpers/utils').convertTemp;
var GetDate = require('../helpers/utils').getDate;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function Detail (props) {
  console.log('weather props', props.weather);
  console.log('city', props.city)
  var icon = props.weather.weather[0].icon;
  return (
    <div>
      <p>City: {props.city}</p>
      <p>Humidity: {props.weather.humidity}</p>
      <p>Min T: {ConvertTemp(props.weather.temp.min)}</p>
      <p>Max T: {ConvertTemp(props.weather.temp.max)}</p>
      <p>{props.weather.weather[0].description}</p>
      <img src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
    </div>
  )
}

module.exports = Detail;
