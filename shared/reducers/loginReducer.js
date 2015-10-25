/**
 * Created by eriq on 10/17/15.
 */
import { LOGIN_RESOLVED } from '../config/constants';
import { handleActions } from 'redux-actions';

const defaultState = {
   name: '',
   userid: '',
   id: '',
   token: {
      value: '',
      ttl: 0,
      created: ''
   }
};

const loginReducer = handleActions({
   LOGIN_RESOLVED: (state, action) => (Object.assign({}, state, {
      userid: action.payload.userId,
      token: {
         value: action.payload.id,
         ttl: action.payload.ttl
      }
   }))
}, defaultState);

export default loginReducer;