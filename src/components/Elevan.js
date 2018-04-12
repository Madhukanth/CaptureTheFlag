import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question11Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

import axios from 'axios';

class Elevan extends Component {
  state = {
    value: '',
    answer: '',
  };
  update = () => {
    if (this.state.value === '3 9' && this.props.question11 === true) {
      this.setState({ answer: 'true' });
      this.props.pointsChanged();
      this.props.question11Changed();
      axios({
        method: 'POST',
        url: 'http://192.168.43.228:3090/points',
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
              11. Often times you will need to decipher a language which you
              cannot find on google, or is encrypted in somewhere I have made up
              the language for you to decipher. This is slightly harder.What is
              the output of the program?
            </p>
            <p>This is a REAL language with REAL rules.</p>
            <p>Clue:</p>
            <p>User types{(3, 9)}</p>
            <p>BEGIN F.ake</p>
            <p>Var int as in</p>
            <p>Int var as in</p>
            <p>Out var int </p>
            <Input
              s={4}
              label="Answer"
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
  question11: state.points.question11,
});

export default connect(mapStateToProps, { pointsChanged, question11Changed })(
  withRouter(Elevan),
);
