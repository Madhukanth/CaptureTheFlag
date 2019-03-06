import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Input, Button } from 'react-materialize';
import { pointsChanged, question4Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

class Four extends Component {
  state = {
    password: 'lt11wuogrx16wr',
    value: '',
    answer: '',
  };

  update = () => {
    if (
      this.state.value === this.state.password &&
      this.props.question4 === true
    ) {
      this.props.pointsChanged();
      this.props.question4Changed();
      this.setState({ answer: 'true' });
      console.log(this.props.email);
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
      <center>
        <div style={{ width: 400, marginTop: 50 }}>
          <p>
            4.To get off the password this time you need to know the basics of
            cryptography This time PAM has encrypted his file and it is
            publically available and can be accessed.
          </p>
          <p>Sample:</p>
          <p>Decrypted string : 1dfcdeyk34</p>
          <p>Encrypted string: 1ehfhjer114</p>
          <p> Password to be Encrypted: Is9tqjakp7mr</p>
          <Input
            s={4}
            label="Encrypted Password"
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
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  points: state.points.points,
  question4: state.points.question4,
});

export default connect(mapStateToProps, { pointsChanged, question4Changed })(
  withRouter(Four),
);
