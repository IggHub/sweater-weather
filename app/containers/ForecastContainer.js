var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../helpers/api').getForecastData;

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true
    }
  },
  componentDidMount: function(){
    console.log("ForecastContainer");
    getForecast(this.props.city)
      .then(function(){
        this.setState({
          isLoading: false
        })
      }.bind(this))
  },
  render: function () {
    return (
      <Forecast isLoading={this.state.isLoading}/>
    )
  }
});

module.exports = ForecastContainer;
