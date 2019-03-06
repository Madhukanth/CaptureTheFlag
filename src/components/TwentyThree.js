import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question23Changed } from '../actions/pointsChange';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const str = '23. Find the password ';
const str1 = 'dairycow="moo";';
const str2 = 'moo = "pwns";';
const str3 = 'rawr = "moo";';
const str4 = 'function checkpass(pass){';
const str5 = 'if(pass == rawr+" "+moo){';
const str6 = 'alert("How did you do that??? Good job!");';
const str7 =
	'window.location = "../../../missions/javascript/6/?lvl_password="+pass;} ';
const str8 = 'else {';
const str9 = 'alert("Nope... try again!");';
const str10 = '}';
const str11 = '}';

class TwentyThree extends Component {
	state = {
		value: '',
		answer: ''
	};
	update = () => {
		if (this.state.value === 'moo pwns' && this.props.question23 === true) {
			this.props.question23Changed();
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
						<p>{str}</p>
						<p>{str1}</p>
						<p>{str2}</p>
						<p>{str3}</p>
						<p>{str4}</p>
						<p>{str5}</p>
						<p>{str6}</p>
						<p>{str7}</p>
						<p>{str8}</p>
						<p>{str9}</p>
						<p>{str10}</p>
						<p>{str11}</p>
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
	question23: state.points.question23
});

export default connect(mapStateToProps, { pointsChanged, question23Changed })(
	withRouter(TwentyThree)
);
