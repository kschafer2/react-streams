import React from 'react';

// Google API Client Docs
// https://developers.google.com/identity/sign-in/web/reference
class GoogleAuth extends React.Component {
  componentDidMount() {
    //available on window scope
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: '779720330212-i9s8bq8582vt922bb3btj9vpchtn4non.apps.googleusercontent.com',
          scope: 'email'
        });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
