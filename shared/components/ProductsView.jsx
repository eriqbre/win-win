/**
 * Created by eriq on 10/25/15.
 */
import React from 'react';
import ProductView from './ProductView';

// the product list view
export default class ProductsView extends React.Component {
   render() {
      return (
         <div id="search-results">
            {this.props.products.map((product, index) => (<ProductView product={product} key={index}/>))}
         </div>
      );
   }
}
