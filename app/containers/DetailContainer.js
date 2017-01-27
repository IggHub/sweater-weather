var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    console.log("DetailsContainer", this.props.location.state.weather);
    console.log("City", this.props.routeParams.city);
    return (
      <Detail weather={this.props.location.state.weather} city={this.props.routeParams.city}/>
    );
  }

});

module.exports = DetailContainer;
