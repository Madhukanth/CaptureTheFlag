import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { connect } from 'react-redux';
import { emailChanged } from '../actions/authActions';
import { sessionService } from 'redux-react-session';

class Logout extends Component {
  logout = () => {
    this.props.history.push('/');
    localStorage.removeItem('user');
    this.props.emailChanged('');
    console.log('DELETED');
  };

  render() {
    return (
      <center>
        <div style={{ marginTop: 300 }}>
          <h3>
            Congratulations...You have successfully completed the event!!!
          </h3>
          <Button onClick={() => this.logout()}>LOGOUT</Button>
        </div>
      </center>
    );
  }
}

export default connect(
  null,
  { emailChanged }
)(Logout);
