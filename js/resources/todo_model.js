import Backbone from 'backbone';
import {APP_URL} from '../parse_auth';


const TodoModel = Backbone.Model.extend({
  urlRoot: APP_URL,
  idAttribute: 'objectId',
  isComplete() {
    //!! will return to it's actual true or false state
    //shortcut for determining whether complete or not
    return !!this.get('completeAt');
  }
});

export default TodoModel;
