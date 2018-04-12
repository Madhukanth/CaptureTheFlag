import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { sessionService } from 'redux-react-session';
import { Alert } from 'react-bootstrap';
import {
  emailChanged,
  passwordChanged,
  nameChanged,
  registerNoChanged,
  signupSuccess,
} from './actions/authActions';
import './App.css';

class App extends Component {
  state = {
    show: false,
  };
  //
  // componentWillMount() {
  // 	sessionService.loadSession
  // 		.then(currentSession => console.log(currentSession))
  // 		.catch(err => console.log(err))
  // 		.then(() =>
  // 			sessionService.loadUser.then(currentUser => console.log(currentUser))
  // 		);
  // }

  signup = () => {
    axios({
      method: 'POST',
      url: 'http://192.168.43.228:3090/signup',
      data: {
        email: this.props.email,
        password: this.props.password,
        name: this.props.name,
        regno: this.props.regno,
        points: 0,
      },
    }).then(res => {
      console.log(res.data.success);
      if (res.data.success === 'true') {
        sessionService.saveSession().then(() => {
          sessionService
            .saveUser({
              email: this.props.email,
              password: this.props.password,
            })
            .then(() => {
              console.log(this.props.email);
              this.props.history.push('/instructions');
            });
        });
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
              marginTop: 50,
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
              label="Name"
              value={this.props.name}
              onChange={event => {
                this.setState({ show: false });
                this.props.nameChanged(event.target.value);
              }}
            />
            <Input
              label="Register No"
              s={12}
              value={this.props.regno}
              onChange={event => {
                this.setState({ show: false });
                this.props.registerNoChanged(event.target.value);
              }}
            />
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

            <Button className="register" onClick={() => this.signup()}>
              Register
            </Button>

            <Link to="/signin">
              <Button className="signin">Sign In</Button>
            </Link>
            {(() => {
              if (this.state.show) {
                return (
                  <Alert bsStyle="danger" bsClass="alert">
                    <p style={{ color: 'red', flexDirection: 'row' }}>
                      Please provide all the details
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
  name: state.auth.name,
  regno: state.auth.regno,
});
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  nameChanged,
  registerNoChanged,
  signupSuccess,
})(withRouter(App));
