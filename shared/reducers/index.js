/**
 * Created by eriq on 10/10/15.
 *
 */
import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
   account: loginReducer,
   errors: errorReducer,
   friends: [],
   goals: [],
   loaders: loaderReducer,
   todos: TodoReducer,
   transactions: []
});

// this should be the shape of the complete store
/*
 const store = {
 errors: [],
 loaders: [],
 account: {
 name, userid, id,
 token: {
 value, ttl
 }
 },
 goals: [],
 transactions: [],
 friends: []
 };
 */