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

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return <div>I dont know if I am signed in</div>;
    } else if(this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
