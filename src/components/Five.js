import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Input, Button } from 'react-materialize';
import { pointsChanged, question5Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

class Five extends Component {
  state = {
    password: 'pc12d4et0j',
    value: '',
    answer: '',
  };

  update = () => {
    if (
      this.state.value === this.state.password &&
      this.props.question5 === true
    ) {
      this.props.pointsChanged();
      this.props.question5Changed();
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
          <p>
            5. As the continue of Encryption, Decrypt the password of PAM to
            advance to the next level.
          </p>
          <p> Password to be Decrypted: Pd35h9ka8j</p>
          <Input
            s={4}
            label="Decrypted Password"
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
  question5: state.points.question5,
});

export default connect(mapStateToProps, { pointsChanged, question5Changed })(
  withRouter(Five),
);
