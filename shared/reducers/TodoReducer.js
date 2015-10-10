/**
 * Created by eriq on 10/10/15.
 */
import Immutable from 'immutable';
import * as constants from '../config/constants';

const defaultState = new Immutable.List();

export default function todoReducer(state = defaultState, action = {type: ''}) {
   switch (action.type) {
      case constants.CREATE_TODO:
         return state.concat(action.text);
      case constants.EDIT_TODO:
         return state.set(action.id, action.text);
      case constants.DELETE_TODO:
         return state.delete(action.id);
      default:
         return state;
   }
}