import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question30Changed } from '../actions/pointsChange';

import axios from 'axios';
import { Alert } from 'react-bootstrap';

class Thirty extends Component {
	state = {
		value: '',
		answer: ''
	};

	update = () => {
		if (
			this.state.value === 'ethical hacking' &&
			this.props.question30 === true
		) {
			console.log('yes');

			this.props.question30Changed();
			this.props.pointsChanged();
			this.setState({ answer: 'true' });
			axios({
				method: 'POST',
				url: 'https://still-wave-40104.herokuapp.com/points',
				data: {
					email: this.props.email,
					points: this.props.points
				}
			}).then(res => {
				this.props.history.push('/logout');
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
							30. Here are the clues, from that you can be able to track the
							password{' '}
						</p>
						<p>Process of doing hacking with authenticated permissions</p>
						<p>Alternative words: intrusion testing, penetration testing</p>

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
	question30: state.points.question30
});

export default connect(mapStateToProps, { pointsChanged, question30Changed })(
	withRouter(Thirty)
);
