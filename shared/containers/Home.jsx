/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
//import * as loginActions from '../actions/loginActions';
import * as searchActions from '../actions/endecaSearchActions';
import { connect } from 'react-redux';

//import LoginForm from './../components/LoginForm';
import ProductsView from './../components/ProductsView';
import SearchForm from './../components/SearchForm';

@connect(state => (state))
export default
class Home extends React.Component {
   render() {
      const { dispatch, account, search } = this.props;
      const totalResults = search.totalResults;
      const products = search.products || [];
      //<LoginForm account={account} {...bindActionCreators(loginActions, dispatch)} />

      return (
         <div id="main">
            <SearchForm total={totalResults} {...bindActionCreators(searchActions, dispatch)} />
            <ProductsView products={products} {...bindActionCreators(searchActions, dispatch)} />
         </div>
      );
   }
}