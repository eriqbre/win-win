/**
 * Created by eriq on 10/17/15.
 */
import { SEARCH_RESOLVED } from '../config/constants';
import { handleActions } from 'redux-actions';

const defaultState = {
   totalResults: 0,
   products: []
};

const endecaSearchReducer = handleActions({
   SEARCH_RESOLVED: (state, action) => (Object.assign({}, state, getProducts(action.payload)))
}, defaultState);

export default endecaSearchReducer;

const getProducts = (payload) => {
   var result = defaultState,
      mainContent = payload.mainContent;

   mainContent.forEach(function (row) {
      // find the correct node
      if (row['@type'] === 'ExtendedResultsList') {
         // set correct state values
         result.totalResults = row.totalNumRecs;
         result.products = row.records.map(function (record) {
            return {
               name: record.attributes['P_Item_Description'][0],
               brand: record.attributes['Brand'][0],
               id: record.attributes['Item Number'][0]
            }
         });
      }
   });

   return result;
};