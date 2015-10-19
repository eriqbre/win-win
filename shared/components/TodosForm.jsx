/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';

export default class TodosForm extends React.Component {
   handleSubmit = () => {
      let node = this.refs['todo-input'];
      this.props.createTodo(node.value);
      node.value = '';
   };

   render() {
      return (
         <div id="todo-form">
            <input type="text" placeholder="type todo" ref="todo-input" defaultValue="test"/>
            <input type="submit" value="OK" onClick={this.handleSubmit}/>
         </div>
      );
   }
}