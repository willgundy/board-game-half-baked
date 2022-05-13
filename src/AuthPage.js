import React from 'react';
import { withRouter } from 'react-router-dom';
import { signIn, signUp } from './services/fetch-utils.js';

export default withRouter(class AuthPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  async handleSignIn(e) {
    e.preventDefault();

    console.log(this.state.email, this.state.password);
      
    // sign the user in using the form state
    const user = await signIn(this.state.email, this.state.password);
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    this.setState({ email: user.email, password: user.password });
  }
    
  async handleSignUp(e) {
    e.preventDefault();
    // sign the user up using the form state
    const user = await signUp(this.state.email, this.state.password);
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    this.setState({ email: user.email, password: user.password });
  }

  render() {
    return (
      <div className='auth'>
        <h1><em>Boardzo</em></h1>
        {/* on submit, sign the user up using the function defined above */}
        <form onSubmit={this.handleSignUp}>
          <label>
              Email
            {/* on change, update the form state for email */}
            <input required type="email" name="email" onChange={e => this.setState({ email: e.target.value })}/>
          </label>
          <label>
              Password
            {/* on change, update the form state for password */}
            <input required type="password" name="password" onChange={e => this.setState({ password : e.target.value })}/>
          </label>
          <button>Sign Up</button>
        </form>
        {/* on submit, sign the user in using the function defined above */}
        <form onSubmit={this.handleSignIn}>
          <label>
              Email
            {/* on change, update the form state for email */}
            <input required type="email" name="email" onChange={e => this.setState({ email: e.target.value })}/>
          </label>
          <label>
              Password
            {/* on change, update the form state for password */}
            <input required type="password" name="password" onChange={e => this.setState({ password : e.target.value })}/>
          </label>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}
);
