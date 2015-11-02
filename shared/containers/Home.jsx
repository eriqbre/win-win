/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//import * as loginActions from '../actions/loginActions';
//import LoginForm from './../components/LoginForm';
import * as searchActions from '../actions/endecaSearchActions';
import ProductsView from './../components/ProductsView';
import SearchForm from './../components/SearchForm';

@connect(state => (state))
export default class Home extends React.Component {
   render() {
      const { dispatch, account, search } = this.props;
      //<LoginForm account={account} {...bindActionCreators(loginActions, dispatch)} />

      return (
         <div id="main">
            <SearchForm total={search.totalResults} {...bindActionCreators(searchActions, dispatch)} />
            <ProductsView products={search.products} {...bindActionCreators(searchActions, dispatch)} />
         </div>
      );
   }
}