/**
 * Created by eriq on 10/10/15.
 */
import * as constants from '../config/constants';

export function createTodo(text) {
   return {type: constants.CREATE_TODO, text, date: Date.now()}
}

export function editTodo(id, text) {
   return {type: constants.EDIT_TODO, id, text, date: Date.now()}
}

export function deleteTodo(id) {
   return {type: constants.DELETE_TODO, id}
}