var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;
var getCurrentWeatherData = require('../helpers/api').getCurrentWeatherData;
var getForecastData = require('../helpers/api').getForecastData;

var GetCityContainer = React.createClass({
  getDefaultProps: function(){
    return {
      direction: 'column'
    }
  },
  PropTypes: {
    direction: PropTypes.string
  },
  getInitialState: function(){
    return {
      city: ''
    }
  },
  handleSubmitCity: function(){
    console.log(this.state.city);
    getForecastData(this.state.city);
  },
  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value
    })
  },
  render: function(){
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        direction={this.props.direction}
        city={this.state.city}
      />
    )
  }
})

module.exports = GetCityContainer;
