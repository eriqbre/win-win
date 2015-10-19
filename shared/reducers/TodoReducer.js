/**
 * Created by eriq on 10/10/15.
 */
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import * as constants from '../config/constants';

const defaultState = new Immutable.List();

export default function TodoReducer(state = defaultState, action = {type: ''}) {
   switch (action.type) {
      case constants.CREATE_TODO:
         return state.concat(action.payload);
      case constants.EDIT_TODO:
         return state.set(action.payload.id, action.payload.text);
      case constants.DELETE_TODO:
         return state.delete(action.payload);
      default:
         return state;
   }
}