import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question26Changed } from '../actions/pointsChange';

import axios from 'axios';
import { Alert } from 'react-bootstrap';

class TwentySix extends Component {
	state = {
		value: '',
		answer: ''
	};
	componentWillMount() {
		console.log('Your password : session-hijacking');
	}
	update = () => {
		if (
			this.state.value === 'session-hijacking' &&
			this.props.question26 === true
		) {
			this.setState({ correct: 1 });
			this.props.question26Changed();
			this.props.pointsChanged();
			this.setState({ answer: 'true' });
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
			<div>
				<center>
					<div style={{ width: 400, marginTop: 50 }}>
						<p>26. Find the Password</p>
						<p>Your Password will be displayed in the console window.</p>
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
	question26: state.points.question26
});

export default connect(mapStateToProps, { pointsChanged, question26Changed })(
	withRouter(TwentySix)
);
