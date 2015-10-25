/**
 * Created by eriq on 10/17/15.
 */
import {
   LOGIN, LOGIN_REJECTED, LOGIN_RESOLVED,
   SEARCH, SEARCH_REJECTED, SEARCH_RESOLVED
} from '../config/constants';
import { handleActions } from 'redux-actions';

const defaultState = [];
const loaderReducer = handleActions({
   //region LOGIN actions
   LOGIN: (state, action) => (state.concat({
      type: LOGIN,
      isLoading: true
   })),
   LOGIN_REJECTED: (state, action) => (state.filter(x => x.type !== LOGIN)),
   LOGIN_RESOLVED: (state, action) => (state.filter(x => x.type !== LOGIN)),
   //endregion
   //region SEARCH actions
   SEARCH: (state, action) => (state.concat({
      type: SEARCH,
      isLoading: true
   })),
   SEARCH_REJECTED: (state, action) => (state.filter(x => x.type !== SEARCH)),
   SEARCH_RESOLVED: (state, action) => (state.filter(x => x.type !== SEARCH))
   //endregion
}, defaultState);

export default loaderReducer;