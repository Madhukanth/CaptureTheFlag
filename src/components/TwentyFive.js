import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pointsChanged, question25Changed } from '../actions/pointsChange';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const str = '25. Faith is going hardcore with javascript operators... ';
const str1 = 'var foo = 5 + 6 * 7 ';
const str2 = 'var bar = foo % 8';
const str3 = 'var moo = bar * 2';
const str4 = 'var rar = moo / 3';
const str5 = 'function check(x){';
const str6 = 'if (x.length == rar){';
const str7 = 'alert("win!");';
const str8 = 'window.location += "?lvl_password="+x};';
const str9 = 'else {';
const str10 = 'alert("fail D:");';
const str11 = '}}';

class TwentyFive extends Component {
	state = {
		value: '',
		answer: ''
	};
	update = () => {
		if (this.state.value.length() === 4 && this.props.question25 === true) {
			this.props.question25Changed();
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
	question25: state.points.question25
});

export default connect(mapStateToProps, { pointsChanged, question25Changed })(
	withRouter(TwentyFive)
);
