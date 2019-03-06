import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions/authActions';

class SetEmail extends Component {
  componentDidMount() {
    console.log('mounted');
    if (localStorage.getItem('user')) {
      this.props.emailChanged(localStorage.getItem('user'));
    }
  }

  render() {
    return this.props.children;
  }
}

export default connect(
  null,
  { emailChanged }
)(SetEmail);
