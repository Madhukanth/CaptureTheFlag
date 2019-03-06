import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question28Changed } from '../actions/pointsChange';

import axios from 'axios';
import { Alert } from 'react-bootstrap';

class TwentyEight extends Component {
	state = {
		value: '',
		answer: ''
	};

	update = () => {
		if (this.state.value === 'penetrate' && this.props.question28 === true) {
			this.setState({ correct: 1 });
			this.props.question28Changed();
			this.props.pointsChanged();
			this.setState({ answer: 'true' });
			axios({
				method: 'POST',
				url: 'https://still-wave-40104.herokuapp.com/points',
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
						<p>28. Infer the meaning of a word to get the password: </p>
						<p>
							likely or liable to be influenced or harmed by a particular thing.
						</p>

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
	question28: state.points.question28
});

export default connect(mapStateToProps, { pointsChanged, question28Changed })(
	withRouter(TwentyEight)
);
