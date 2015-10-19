/**
 * Created by eriq on 10/17/15.
 */
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { LOGIN, LOGIN_REJECTED, LOGIN_RESOLVED } from '../config/constants';

const defaultState = new Immutable.List();

const errorReducer = handleActions({
   //region LOGIN actions
   LOGIN_REJECTED: (state, action) => (state.concat({
      type: LOGIN_REJECTED,
      message: action.payload.error.message
   })),
   // remove the login_rejected error when appropriate
   LOGIN: (state, action) => (state.filter(x => x.type !== LOGIN_REJECTED)),
   LOGIN_RESOLVED: (state, action) => (state.filter(x => x.type !== LOGIN_REJECTED))
   //endregion
}, defaultState);

export default errorReducer;

