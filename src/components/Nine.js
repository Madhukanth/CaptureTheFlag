import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question9Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

import axios from 'axios';

let str = '{';
class Nine extends Component {
  state = {
    value: '',
    answer: '',
  };
  update = () => {
    if (this.state.value.length() >= 300 && this.props.question9 === true) {
      this.props.pointsChanged();
      this.props.question9Changed();
      this.setState({ answer: 'true' });
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
              9. You have to give input to a C program which gives you the
              length of the string. How would you crash it.
            </p>
            <p>Here is the function:</p>
            <p>Void blah(char *str)</p>
            <p style={{ marginRight: 100 }}>{str}</p>
            <p>Char lol[300];</p>
            <p>Strcpy(lol,str);</p>
            <p style={{ marginRight: 100 }}>}</p>
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
  question9: state.points.question9,
});

export default connect(mapStateToProps, { pointsChanged, question9Changed })(
  withRouter(Nine),
);
