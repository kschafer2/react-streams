import React from 'react';

// Google API Client Docs
// https://developers.google.com/identity/sign-in/web/reference
class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    //available on window scope
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: '779720330212-i9s8bq8582vt922bb3btj9vpchtn4non.apps.googleusercontent.com',
          scope: 'email'
        }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return null;
    } else if(this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
