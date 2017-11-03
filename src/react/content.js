import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/RootComponent';

//These libraries can really be a part of extension, but for performance reasons you can use standalone dependencies

global.jQuery = require('jquery/dist/jquery.min.js');
global.$ = global.jQuery;
require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('./styles/style.css');
require('./styles/adminlte.css');

ReactDOM.render( <RootComponent />, document.getElementById('app'));
