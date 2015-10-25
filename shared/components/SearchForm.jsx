/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';

export default class SearchForm extends React.Component {
   handleSubmit = () => {
      let node = this.refs['search-input'];
      this.props.searchActions({
         Ntt: node.value || 'beef'
      });
   };

   render() {
      return (
         <div id="todo-form">
            <div>
               <input type="text" placeholder="search criteria" ref="search-input" defaultValue=""/>
               <input type="submit" value="OK" onClick={this.handleSubmit}/>
            </div>
            <div id="total"># results: {this.props.total}</div>
         </div>
      );
   }
}