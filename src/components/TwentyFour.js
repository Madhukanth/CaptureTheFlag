import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question24Changed } from '../actions/pointsChange';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const str = '24. Find the password ';
const str1 = 'Javascript';
const str2 = 'if (document.getElementById("pass").value=="j00w1n"){';
const str3 = 'alert("You WIN!");';
const str4 =
	'window.location += "?lvl_password="+document.getElementById("pass").value}';
const str5 = 'else {';
const str6 = 'alert("WRONG! Try again!")}';

class TwentyFour extends Component {
	state = {
		value: '',
		answer: ''
	};
	update = () => {
		if (this.state.value === 'j00w1n' && this.props.question24 === true) {
			this.props.question24Changed();
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
						<p>{str}</p>
						<p>{str1}</p>
						<p>{str2}</p>
						<p>{str3}</p>
						<p>{str4}</p>
						<p>{str5}</p>
						<p>{str6}</p>
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
	question24: state.points.question24
});

export default connect(mapStateToProps, { pointsChanged, question24Changed })(
	withRouter(TwentyFour)
);
