import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  timeChanged,
  minutesChanged,
  hourChanged,
} from '../actions/timeChange';

class Timer extends Component {
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  timer() {
    this.props.timeChanged();
    if (this.props.seconds === 60) {
      this.props.minutesChanged();
    }
    if (this.props.minutes === 60) {
      this.props.hourChanged();
    }
    if (this.props.minutes === 45) {
      this.props.history.push('/logout');
    }
  }
  render() {
    return (
      <p style={{ fontSize: 20 }}>
        {this.props.hour} hour :{this.props.minutes} min :{this.props.seconds}
				seconds
      </p>
    );
  }
}

const mapStateToProps = state => ({
  seconds: state.time.seconds,
  minutes: state.time.minutes,
  hour: state.time.hour,
});

export default connect(mapStateToProps, {
  timeChanged,
  minutesChanged,
  hourChanged,
})(Timer);
