/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import * as loginActions from '../actions/loginActions';
import { connect } from 'react-redux';

import TodosView from './TodosView';
import TodosForm from './TodosForm';
import LoginForm from './LoginForm';

@connect(state => (state))
export default
class Home extends React.Component {
   render() {
      const { todos, dispatch, account } = this.props;

      return (
         <div id="todo-list">
            <LoginForm account={account} {...bindActionCreators(loginActions, dispatch)} />
            <TodosForm {...bindActionCreators(TodoActions, dispatch)} />
            <TodosView todos={todos} {...bindActionCreators(TodoActions, dispatch)} />
         </div>
      );
   }
}