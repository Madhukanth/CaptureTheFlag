import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question21Changed } from '../actions/pointsChange';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const str =
	'21. To reach next level you must know the  ASCII code <-> letter conversion. Clue(97 - a, 65 – A)';
const str1 = '<script language="Javascript">';
const str2 = 'moo = unescape(`%101%109%117%98%119`);';
const str3 = 'function check (x) {';
const str4 = '        if (x == moo){';
const str5 = 'alert(`Ahh.. so that is what she means`);';
const str6 =
	'window.location = "../../../missions/javascript/5/?lvl_password="+x;}';
const str7 = '        else {';
const str8 = 'alert("Nope... try again!");';
const str9 = '}';
const str10 = '}';
const str11 = '</script>';

class TwentyOne extends Component {
	state = {
		value: '',
		answer: ''
	};
	update = () => {
		if (this.state.value === 'emubw' && this.props.question21 === true) {
			this.props.question21Changed();
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
	question21: state.points.question21
});

export default connect(mapStateToProps, { pointsChanged, question21Changed })(
	withRouter(TwentyOne)
);
