import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question16Changed } from '../actions/pointsChange';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const str = 'var foo = 5 + 6 * 7';
const str1 = 'var bar = foo % 8';
const str2 = 'var moo = bar * 2';
const str3 = 'var rar = moo / 3';
const str4 = 'function check(x){';
const str5 = 'if (x.length == moo){';
const str6 = 'alert("win!");';
const str7 = 'window.location += "?lvl_password="+x;';
const str8 = '}';
const str9 = 'else {';
const str10 = 'alert("fail D:");';
const str11 = '}}';
class Sixteen extends Component {
	state = {
		value: '',
		answer: ''
	};
	update = () => {
		if (this.state.value.length() >= 14 && this.props.question16 === true) {
			this.props.question16Changed();
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
						<p>16. Faith is going hardcore with javascript operators...</p>
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
	question16: state.points.question16
});

export default connect(mapStateToProps, { pointsChanged, question16Changed })(
	withRouter(Sixteen)
);
