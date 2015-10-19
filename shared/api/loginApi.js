/**
 * Created by eriq on 10/17/15.
 */
import request from 'axios';

export default function loginApi(credentials) {
   request.post('http://win-win-api.herokuapp.com/api/members/login', {
      email: 'eriqbre@gmail.com',
      password: 'pass'
   }).then(function (response) {
      console.log('api response', response);
      Promise.response;
   }).catch(function (response) {
      console.log(response);
      return response;
   });
}
