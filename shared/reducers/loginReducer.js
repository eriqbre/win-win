/**
 * Created by eriq on 10/17/15.
 */
import Immutable from 'immutable';
import { LOGIN, LOGIN_RESOLVED } from '../config/constants';
import { handleActions } from 'redux-actions';

const defaultState = Immutable.Map({
   name: '',
   userid: '',
   id: '',
   token: {
      value: '',
      ttl: 0,
      created: ''
   }
});

const loginReducer = handleActions({
   LOGIN_RESOLVED: (state, action) => (state.merge({
      userid: action.payload.userId,
      token: {
         value: action.payload.id,
         ttl: action.payload.ttl
      }
   }))
}, defaultState);

export default loginReducer;