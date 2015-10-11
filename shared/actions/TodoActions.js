/**
 * Created by eriq on 10/10/15.
 */
import * as constants from '../config/constants';
import { createAction } from 'redux-actions';

const createTodo = createAction(constants.CREATE_TODO);
const editTodo = createAction(constants.EDIT_TODO);
const deleteTodo = createAction(constants.DELETE_TODO);

export {
   createTodo,
   editTodo,
   deleteTodo
}