import APP_URL from '../parseData';
import Backbone from 'backbone';

let TodoModelReact=Backbone.Model.extend({

  urlRoot: APP_URL;

  idAttribute: 'objectId';

//ADD IF COMPLETE PART
// isComplete() {
//   return !!this.get('completeAt');
// }

// });

export default TodoModelReact;
