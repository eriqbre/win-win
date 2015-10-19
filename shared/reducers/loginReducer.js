/**
 * Created by eriq on 10/17/15.
 */
import Immutable from 'immutable';
import { LOGIN, LOGIN_RESOLVED } from '../config/constants';
import { resolve, reject } from 'redux-simple-promise';
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
   LOGIN: (state, action) => (Object.assign({}, state, {
      meta: action.payload
   })),
   LOGIN_RESOLVED: (state, action) => (Object.assign({}, state, {
      userid: action.payload.userId,
      token: {
         value: action.payload.id,
         ttl: action.payload.ttl
      }
   }))
}, defaultState);

export default loginReducer;