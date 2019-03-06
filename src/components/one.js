import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { pointsChanged, question1Changed } from '../actions/pointsChange';
import { emailChanged } from '../actions/authActions';

class One extends Component {
  state = {
    password: 'rstuv123rp',
    value: '',
    answer: '',
  };

  componentWillMount() {
    console.log(this.props.email);
    console.log(this.props.points);
  }

  update = () => {
    if (
      this.state.value === this.state.password &&
      this.props.question1 === true
    ) {
      this.props.pointsChanged();
      this.props.question1Changed();
      this.setState({ answer: 'true' });
      console.log(this.state.email);
      console.log(this.props.points);

      axios({
        method: 'POST',
        url: 'https://still-wave-40104.herokuapp.com/points',
        data: {
          email: this.props.email,
          points: this.props.points,
        },
      }).then(res => console.log(res.data.success));
    } else {
      this.setState({ answer: 'false' });
    }
  };
  render() {
    return (
      <div>
        <center>
          <div style={{ width: 400, marginTop: 50 }}>
            <p>
              1. Find the password and continue.For that you need to know the
              basics of HTML.
            </p>
            <Input
              s={4}
              label="Password"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            <Button onClick={() => this.update()}>Submit</Button>
            {(() => {
              if (this.state.answer === 'true') {
                return (
                  <Alert bsStyle="success" bsClass="alert">
                    <p style={{ color: 'green', flexDirection: 'row' }}>
                      Correct
                    </p>
                  </Alert>
                );
              } else if (this.state.answer === 'false')
                return (
                  <Alert bsStyle="danger" bsClass="alert">
                    <p style={{ color: 'red', flexDirection: 'row' }}>Wrong</p>
                  </Alert>
                );
            })()}
          </div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  points: state.points.points,
  question1: state.points.question1,
});

export default connect(mapStateToProps, {
  emailChanged,
  pointsChanged,
  question1Changed,
})(withRouter(One));
