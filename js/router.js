import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import Home from './views/homeView';


export default Backbone.Router.extend({

routes:
{
"" : "showHomeView",
"Home" : "showHomeView",




},

  initialize(appElement) {
    this.el =appElement;
  

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },


render (component) {
  ReactDom.render(component, this.el);
},




  start: function (){
    Backbone.history.start();
    }
});
console.log('router file');

// export default router;