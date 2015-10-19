/**
 * Created by eriq on 10/17/15.
 */
import React from 'react';

export default class LoginForm extends React.Component {
   handleSubmit = () => {
      let emailInput = this.refs['email-input'];
      let passwordInput = this.refs['password-input'];
      this.props.login({
         email: emailInput.value,
         password: passwordInput.value
      });
   };

   render() {
      return (
         <div id="login-form">
            <div>{this.props.account.userid}</div>
            <input type="text" placeholder="username" ref="email-input" defaultValue="eriqbre@gmail.com"/>
            <input type="text" placeholder="password" ref="password-input" defaultValue="pass"/>
            <input type="submit" value="login" onClick={this.handleSubmit}/>
         </div>
      );
   }
}