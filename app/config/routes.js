var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var HomeContainer = require('../containers/HomeContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var DetailContainer = require('../containers/DetailContainer');
var SweaterContainer = require('../containers/SweaterContainer');
var Loading = require('../components/Loading');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='result/:city' component={SweaterContainer} />
      <Route path='detail/:city' component={DetailContainer} />
      <Route path='loading' component={Loading} />
    </Route>
  </Router>
);

module.exports = routes;
