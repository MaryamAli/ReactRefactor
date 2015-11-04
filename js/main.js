import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import _ from 'underscore';
import Backbone from 'backbone';
import $ from 'jquery';

import Router from './router';
import './ajaxSetup';
import TodoCollectionReact from './resources';
import TodoReactView from './views';


let element = document.querySelector('app');
let router= new Router(element);
router.start();

window.router=router;


console.log('main js file');
