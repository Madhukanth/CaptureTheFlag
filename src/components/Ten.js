import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question10Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

import axios from 'axios';

class Ten extends Component {
	state = {
		value: '',
		answer: ''
	};
	update = () => {
		if (this.state.value === 3 && this.props.question10 === true) {
			this.props.pointsChanged();
			this.props.question10Changed();
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
						<p>
							10. Often times u need to decipher a language which you cannot
							find on google ,or is encrypted in some way. I have made up a
							language for you to decipher. What is the output of this program?
						</p>
						<p>Here is the function:</p>
						<p>BEGIN notr.ea1</p>
						<p>CREATE int AS 3</p>
						<p>DESTROY int AS 0</p>
						<p>ANS var AS create + To</p>
						<p>Out To</p>
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
	question10: state.points.question10
});

export default connect(mapStateToProps, { pointsChanged, question10Changed })(
	withRouter(Ten)
);
