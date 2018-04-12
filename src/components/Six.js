import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Input, Button } from 'react-materialize';
import { pointsChanged, question6Changed } from '../actions/pointsChange';
import { Alert } from 'react-bootstrap';

class Six extends Component {
	state = {
		password: 'Stenography,Inside,Popcorn,Vulnerable,Juvenile',
		value: '',
		answer: ''
	};

	update = () => {
		if (
			this.state.value === this.state.password &&
			this.props.question6 === true
		) {
			this.props.pointsChanged();
			this.props.question6Changed();
			this.setState({ answer: 'true' });
			console.log(this.props.email);

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
						6. Find the list of unscrambled words from the given session.Enter
						your answer with all the first letters capital separated by comma in
						the same order as in the question.
					</p>
					<p>Stenography</p>
					<p>Sinedi</p>
					<p>Opprocn</p>
					<p>Ulvnerable</p>
					<p>Jvunelie</p>
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
	question6: state.points.question6
});

export default connect(mapStateToProps, { question6Changed, pointsChanged })(
	withRouter(Six)
);
