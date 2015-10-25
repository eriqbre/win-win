/**
 * Created by eriq on 10/25/15.
 */
import React from 'react';

// view for individual products
/*
 export const Product = ({ product }) => (
 <div data-id={product.id}>{product.name}</div>
 );*/

export default class ProductView extends React.Component {
   render() {
      return (
         <div data-id={this.props.key}>{this.props.product.name}</div>
      );
   }
}