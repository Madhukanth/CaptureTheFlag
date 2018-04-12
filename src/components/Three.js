import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { Input, Button } from 'react-materialize';
import {
	pointsChanged,
	question3Changed,
	passChanged
} from '../actions/pointsChange';

class Three extends Component {
	state = {
		password: 'cadmfgjd',
		value2: '',
		value: '',
		answer: ''
	};

	update = () => {
		if (
			this.state.value === this.state.password &&
			this.props.question3 === true
		) {
			this.props.pointsChanged();
			this.props.question3Changed();
			this.setState({ answer: 'true' });
			console.log(this.props.email);
			console.log(this.props.points);

			axios({
				method: 'POST',
				url: 'http://192.168.43.228:3090/points',
				data: {
					email: this.props.email,
					points: this.props.points
				}
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
						3.This time Pam has uploaded the password file but still you find
						difficulty in it.The file name is password.php.Use it to find the
						password.Type the URL to be used to get the password in first box.
					</p>
					<p>
						After getting the password type come back here and type the password
						in password input
					</p>
					<Input
						s={4}
						label="Password"
						value={this.state.value2}
						onChange={event => this.setState({ value2: event.target.value })}
					/>
					<Button
						onClick={() => {
							if (
								this.state.value2 === 'http://192.168.43.228:3000/password.php'
							) {
								this.props.passChanged();
							}
						}}
					>
						GOTO
					</Button>
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
		);
	}
}

const mapStateToProps = state => ({
	email: state.auth.email,
	points: state.points.points,
	question3: state.points.question3
});

export default connect(mapStateToProps, {
	pointsChanged,
	passChanged,
	question3Changed
})(withRouter(Three));
