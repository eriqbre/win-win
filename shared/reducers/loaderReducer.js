/**
 * Created by eriq on 10/17/15.
 */
import Immutable from 'immutable';
import { LOGIN, LOGIN_REJECTED, LOGIN_RESOLVED } from '../config/constants';
import { handleActions } from 'redux-actions';

const defaultState = new Immutable.List();
const loaderReducer = handleActions({
   //region LOGIN actions
   LOGIN: (state, action) => (state.concat({
      type: LOGIN,
      isLoading: true
   })),
   LOGIN_REJECTED: (state, action) => (state.filter(x => x.type !== LOGIN)),
   LOGIN_RESOLVED: (state, action) => (state.filter(x => x.type !== LOGIN))
   //endregion
}, defaultState);

export default loaderReducer;