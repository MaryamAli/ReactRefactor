import React from 'react';


let Home= React.createClass({

render() {

  return(
    <div>
      <header>
        <h1>Things Todo</h1>
      </header>
      <main>
        <form className="todo-add">
          <input type="text" name="title" placeholder="Add Something"/>
          <button><i class="fa fa-plus"></i></button>
        </form>
        <ul className="todo-list"></ul>
        {this.props.data.map(this.getToDo)}
      </main>
      <footer>
        <button className="clear">Clear Complete</button>
      </footer>
    </div>

  );

}


});


export default Home;

console.log('homeView file');