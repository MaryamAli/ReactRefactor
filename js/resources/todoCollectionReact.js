import Backbone from 'backbone';
import TodoModelReact from './todoModelReact';
import APP_URL from '../parseData';

let TodoCollectionReact=Backbone.Model.extende({
  url: APP_URL;
  model: todoModelReact;
  parse function(data){
    return data.results;
    
  }

});

export default TodoCollectionReact;