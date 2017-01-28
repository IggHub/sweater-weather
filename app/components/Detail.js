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
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{props.city}</h2>
      <h2 style={styles.subheader}>{props.weather.weather[0].description}</h2>
      <h2 style={styles.subheader}>Min Temp: {ConvertTemp(props.weather.temp.min)} degrees</h2>
      <h2 style={styles.subheader}>Max Temp: {ConvertTemp(props.weather.temp.max)} degrees</h2>
      <h2 style={styles.subheader}>Humidity: {props.weather.humidity}</h2>

    </div>
  )
}

module.exports = Detail;
