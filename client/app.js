import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
// import index from './base';

import routes from './routes';
import components from './components';
// angular.module('app', [index]);
angular.module('app', [uirouter, components])
  .config(routes);