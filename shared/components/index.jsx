/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';

export default class AppView extends React.Component {
   render() {
      return (
         <div id="app-view">
            <h1>WinWin</h1>
            <hr/>
            {this.props.children}
         </div>
      );
   }
}