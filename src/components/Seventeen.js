import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question17Changed } from '../actions/pointsChange';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const str = '<script language="Javascript">';
const str1 = 'RawrRawr = "moo";';
const str2 = 'function check(x){';
const str3 = '"+RawrRawr+" == "hack_this_site"';
const str4 = 'if (x == ""+RawrRawr+""){';
const str5 = 'alert("Rawr! win!");';
const str6 =
  'window.location = "../../../missions/javascript/4/?lvl_password="+x;}';
const str7 = 'window.location += "?lvl_password="+x;';
const str8 = 'else {';
const str9 = 'alert("Rawr, nope, try again!");';
const str10 = '}}';
const str11 = '</script>';

class Seventeen extends Component {
  state = {
    value: '',
    answer: '',
  };
  update = () => {
    if (this.state.value === 'moo' && this.props.question17 === true) {
      this.props.question17Changed();
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
            <p>17. Try this out...</p>
            <p>{str}</p>
            <p>{str1}</p>
            <p>{str2}</p>
            <p>{str3}</p>
            <p>{str4}</p>
            <p>{str5}</p>
            <p>{str6}</p>
            <p>{str7}</p>
            <p>{str8}</p>
            <p>{str9}</p>
            <p>{str10}</p>
            <p>{str11}</p>
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
  question17: state.points.question17,
});

export default connect(mapStateToProps, { pointsChanged, question17Changed })(
  withRouter(Seventeen),
);
