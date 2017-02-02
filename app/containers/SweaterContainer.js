var React = require('react')
var Sweater = require('../components/Sweater')
var getForcast = require('../helpers/api').getForcast;
var getCurrentWeather = require('../helpers/api').getCurrentWeather;

var SweaterContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function(){
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillMount: function(){
    this.makeRequest(this.props.routeParams.city)
  },
  makeRequest: function(city){
    getCurrentWeather(city)
      .then(function(forecastData){
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
    }.bind(this));
  },
  render: function(){
    return (
      <Sweater
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    )
  }
});

module.exports = SweaterContainer;
