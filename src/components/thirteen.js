import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question13Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

import axios from 'axios';

class Thirteen extends Component {
	state = {
		value: '',
		answer: ''
	};
	update = () => {
		if (this.state.value === 'cybercrime' && this.props.question13 === true) {
			this.setState({ answer: 'true' });
			this.props.question13Changed();
			this.props.pointsChanged();

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
						<p>13. Find the Password</p>
						<p>(Hint)crime that involves a computer and a network.</p>
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
	question13: state.points.question13
});

export default connect(mapStateToProps, { pointsChanged, question13Changed })(
	withRouter(Thirteen)
);
