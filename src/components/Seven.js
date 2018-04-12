import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Input, Button } from 'react-materialize';
import { pointsChanged, question7Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

class Seven extends Component {
  state = {
    password: 'Insured,Property,Mutual,Peril,Sploit',
    value: '',
    answer: '',
  };

  update = () => {
    if (
      this.state.value === this.state.password &&
      this.props.question7 === true
    ) {
      this.props.pointsChanged();
      this.props.question7Changed();
      this.setState({ answer: 'true' });
      console.log(this.props.email);

      axios({
        method: 'POST',
        url: 'http://192.168.43.228:3090/points',
        data: {
          email: this.props.email,
          points: this.props.points,
        },
      }).then(res => console.log(res.data.success));
    }
  };
  render() {
    return (
      <center>
        <div style={{ width: 400, marginTop: 50 }}>
          <p>
            7. As the continuity, track the unscrambled words from the scrambled
            (have a look at the clues given).Enter your answer with all the
            first letters capital separated by comma in the same order as in the
            question.
          </p>
          <p> Dnruesi- covered by insurance</p>
          <p>Torpyepr- possessions collectivity</p>
          <p>Mtauul- specified relationship to each other</p>
          <p>Elirp- immediate danger</p>
          <p>Loispt- destroy</p>
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
});

export default connect(mapStateToProps, { pointsChanged, question7Changed })(
  withRouter(Seven),
);
