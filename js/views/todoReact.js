import React from 'react';
import ReactDom from 'react-dom';


export default React.createClass({

  
  render(model) {
    let complete = model.isComplete();
    let fa = complete ? 'undo' : 'close';
    let action = complete ? 'undo' : 'remove';


      //WORK ON THIS PART
    return (
      <div>
        <li className="todo">
          <span class="title ${complete ? 'complete' : ''}"/>
            ${this.model.get('title')}
          </span>
          <button className="${action}" data-id="${model.id}"/>
            <i class="fa fa-${fa}"></i>
          </button>
        </li>
      </div>
      
      );
  }
});

export default toDoReactView;
