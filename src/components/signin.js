import React, { Component } from 'react';
import { Row, Button, Input } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import {
  emailChanged,
  passwordChanged,
  loginSuccess,
} from '../actions/authActions';
import '../App.css';

class Signin extends Component {
  state = {
    show: false,
  };
  login = () => {
    axios({
      method: 'POST',
      url: 'http://192.168.43.228:3090/login',
      data: {
        email: this.props.email.toLowerCase(),
        password: this.props.password,
      },
    }).then(res => {
      if (res.data.success === 'true') {
        console.log(res.data.success);
        this.props.history.push('/instructions');
      } else {
        this.setState({ show: true });
      }
    });
  };
  render() {
    return (
      <div>
        <center>
          <Row
            style={{
              marginTop: 100,
              width: 400,
              flex: 1,
            }}
          >
            <div
              className="imageLocation"
              style={{ width: 400, height: 200, paddingBottom: 30 }}
            >
              <center>
                <p style={{ color: 'white' }}>Capture The Flag(CTF)</p>
              </center>
            </div>

            <Input
              s={12}
              label="Email"
              value={this.props.email}
              onChange={event => {
                this.setState({ show: false });
                this.props.emailChanged(event.target.value);
              }}
            />
            <Input
              type="password"
              label="Password"
              s={12}
              value={this.props.password}
              onChange={event => {
                this.setState({ show: false });
                this.props.passwordChanged(event.target.value);
              }}
            />

            <Button onClick={() => this.login()}>SIGN IN</Button>
            {(() => {
              if (this.state.show) {
                return (
                  <Alert bsStyle="danger" bsClass="alert">
                    <p style={{ color: 'red' }}>
                      Incorrect Username or Password
                    </p>
                  </Alert>
                );
              }
            })()}
          </Row>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
});
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginSuccess,
})(withRouter(Signin));
