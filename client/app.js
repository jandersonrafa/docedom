// import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';
// import index from './base';

import routes from './routes';
import components from './components';
// angular.module('app', [index]);

angular.module('app', [uirouter, components])
  .config(routes);