/**
 * Created by eriq on 10/10/15.
 *
 */
import { combineReducers } from 'redux';
import endecaSearchReducer from './endecaSearchReducer';
import errorReducer from './errorReducer';
import loaderReducer from './loaderReducer';
import loginReducer from './loginReducer';

export default combineReducers({
   account: loginReducer,
   errors: errorReducer,
   loaders: loaderReducer,
   search: endecaSearchReducer
});