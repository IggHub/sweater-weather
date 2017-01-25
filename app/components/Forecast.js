var React = require('react');
var Loading = require('./Loading');

function Forecast (props) {
  return props.isLoading === true
    ? <Loading /> :
    <div>Forecast Component</div>
}

module.exports = Forecast;
