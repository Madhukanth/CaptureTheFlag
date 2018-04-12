import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { pointsChanged, question2Changed } from '../actions/pointsChange';
import axios from 'axios';

class Two extends Component {
	state = {
		value: '',
		answer: ''
	};

	update = () => {
		if (this.state.value === '' && this.props.question2 === true) {
			this.props.pointsChanged();
			console.log(this.props.points);
			this.setState({ answer: 'true' });
			this.props.question2Changed();
			axios({
				method: 'POST',
				url: 'http://192.168.43.228:3090/points',
				data: {
					email: this.props.email,
					points: this.props.points
				}
			}).then(res => {
				console.log(res.data.success);
			});
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
							2. Network security PAM has setup a password production script and
							made it load the password from unencrypted file and compare it to
							the password you enter but he neglected to upload the password
							file.
						</p>
						<Input
							s={4}
							label="Password"
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
	question2: state.points.question2
});

export default connect(mapStateToProps, { pointsChanged, question2Changed })(
	withRouter(Two)
);
