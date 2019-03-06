import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question15Changed } from '../actions/pointsChange';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const str = '<script language="Javascript"> ';
const str1 = 'function check(x){';
const str2 = 'if(x == "cookies"){';
const str3 = 'alert("win!");';
const str4 = 'window.location += "?lvl_password="+x;}';
const str5 = 'else';
const str6 = 'alert("Fail D:");}}';
const str7 = '</script>';
class Fifteen extends Component {
  state = {
    value: '',
    answer: '',
  };
  update = () => {
    if (this.state.value === 'cookies' && this.props.question15 === true) {
      this.props.question15Changed();
      this.props.pointsChanged();
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
              15. Find the password and continue for that you need to know the
              basics of JAVASCRIPT . hint is that the password lies within the
              source code.
            </p>
            <p>{str}</p>
            <p>{str1}</p>
            <p>{str2}</p>
            <p>{str3}</p>
            <p>{str4}</p>
            <p>{str5}</p>
            <p>{str6}</p>
            <p>{str7}</p>
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
  question15: state.points.question15,
});

export default connect(mapStateToProps, { pointsChanged, question15Changed })(
  withRouter(Fifteen),
);
