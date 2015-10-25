/**
 * Created by eriq on 10/25/15.
 */
import request from 'axios';
import { SEARCH } from '../config/constants';

export const searchActions = (options) => {
   return {
      type: SEARCH,
      payload: {
         promise: request.get('http://syscodemo.realdecoy.com:8080/Service/json/browse?N=0&P_Customer_Number=1000082986&Ntt=' + options.Ntt || 'beef', {
            Ntt: options.Ntt || 'beef'
         }).then(function (response) {
            return response.data;
         }).catch(function (response) {
            console.log(response);
            throw(response.data);
         }),
         options
      }
   }
};