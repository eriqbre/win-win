/**
 * Created by eriq on 10/10/15.
 */
import request from 'axios';
import * as constants from '../config/constants';
import loginApi from '../api/loginApi';

export const login = (credentials) => {
   return {
      type: constants.LOGIN,
      payload: {
         promise: request.post('http://win-win-api.herokuapp.com/api/members/login', {
            email: credentials.email,
            password: credentials.password
         }).then(function (response) {
            return response.data;
         }).catch(function (response) {
            console.log(response);
            throw(response.data);
         }),
         credentials
      }
   }
};
