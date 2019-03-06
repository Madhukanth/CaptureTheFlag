import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Input, Button } from 'react-materialize';
import { pointsChanged, question8Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

class Eight extends Component {
  state = {
    password: 'Computer,Experiment,Vulnerability,Capture,Hacker',
    value: '',
    answer: '',
  };

  update = () => {
    if (
      this.state.value === this.state.password &&
      this.props.question8 === true
    ) {
      this.props.pointsChanged();
      this.props.question8Changed();
      this.setState({ answer: 'true' });
      console.log(this.props.email);

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
          <p>8. It adds further more difficulty in finding unscramble words:</p>
          <p>Try it out:</p>
          <p>
            Enter your answer with all the first letters capital separated by
            comma in the same order as in the question.
          </p>
          <p>Pceuortm</p>
          <p>exmpetneir</p>
          <p>lervbitlyiaun</p>
          <p>tpcareu</p>
          <p>kcrahe</p>
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
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  points: state.points.points,
  question8: state.points.question8,
});

export default connect(mapStateToProps, { pointsChanged, question8Changed })(
  withRouter(Eight),
);
