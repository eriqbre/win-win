/**
 * Created by eriq on 10/10/15.
 */
import * as constants from '../config/constants';

export function login(credentials) {
   return {
      types: [
         constants.LOGIN_PENDING,
         constants.LOGIN_SUCCESS,
         constants.LOGIN_FAILED
      ],
      payload: {
         promise: doSomething(credentials),
         data: data
      }
   }
}