/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';

export default class App extends React.Component {
   render() {
      return (
         <div id="app-view">
            <h1>React Redux</h1>
            <hr/>
            {this.props.children}
         </div>
      );
   }
}