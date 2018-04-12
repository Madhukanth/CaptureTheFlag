import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import { emailChanged } from '../actions/authActions';

class Email extends Component {
  render() {
    return (
      <center>
        <div>
          <Input
            s={12}
            label="Email"
            value={this.props.email}
            onChange={(event) => {
							this.setState({ show: false });
							this.props.emailChanged(event.target.value);
						}}
          />

          <Button onClick={() => this.props.history.push('/1')}>SUBMIT</Button>
        </div>
      </center>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
});
export default connect(mapStateToProps, { emailChanged })(withRouter(Email));
