import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Row, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { emailChanged } from '../actions/authActions';
import { passChanged } from '../actions/pointsChange';
import One from './one';
import Two from './two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Ten from './Ten';
import Elevan from './Elevan';
import Twelve from './twelve';
import Thirteen from './thirteen';
import Fourteen from './fourteen';
import Fifteen from './Fifteen';
import Sixteen from './Sixteen';
import Seventeen from './Seventeen';
import Eighteen from './Eighteen';
import Nineteen from './Nineteen';
import Twenty from './Twenty';
import TwentyOne from './TwentyOne';
import TwentyTwo from './TwentyTwo';
import TwentyThree from './TwentyThree';
import TwentyFour from './TwentyFour';
import TwentyFive from './TwentyFive';
import TwentySix from './TwentySix';
import TwentySeven from './TwentySeven';
import TwentyEight from './TwentyEight';
import TwentyNine from './TwentyNine';
import Thirty from './Thirty';
import Timer from './Timer';
import Password from './password';

class Question extends Component {
	state = {
		active: 1
	};

	render() {
		return (
			<div>
				<center>
					<div>
						<h1>Capture The Flag(CTF)</h1>
						<Timer />
					</div>
					<Pagination bsSize="large">
						<Pagination.Item
							active={1 === this.state.active}
							onClick={() => {
								this.setState({ active: 1 });
							}}
						>
							1
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 2 })}
							active={2 === this.state.active}
						>
							2
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 3 })}
							active={3 === this.state.active}
						>
							3
						</Pagination.Item>
						<Pagination.Item
							onClick={() => {
								this.setState({ active: 4 });
							}}
							active={4 === this.state.active}
						>
							4
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 5 })}
							active={5 === this.state.active}
						>
							5
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 6 })}
							active={6 === this.state.active}
						>
							6
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 7 })}
							active={7 === this.state.active}
						>
							7
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 8 })}
							active={8 === this.state.active}
						>
							8
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 9 })}
							active={9 === this.state.active}
						>
							9
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 10 })}
							active={10 === this.state.active}
						>
							10
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 11 })}
							active={11 === this.state.active}
						>
							11
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 12 })}
							active={12 === this.state.active}
						>
							12
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 13 })}
							active={13 === this.state.active}
						>
							13
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 14 })}
							active={14 === this.state.active}
						>
							14
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 15 })}
							active={15 === this.state.active}
						>
							15
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 16 })}
							active={16 === this.state.active}
						>
							16
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 17 })}
							active={17 === this.state.active}
						>
							17
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 18 })}
							active={18 === this.state.active}
						>
							18
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 19 })}
							active={19 === this.state.active}
						>
							19
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 20 })}
							active={20 === this.state.active}
						>
							20
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 21 })}
							active={21 === this.state.active}
						>
							21
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 22 })}
							active={22 === this.state.active}
						>
							22
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 23 })}
							active={23 === this.state.active}
						>
							23
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 24 })}
							active={24 === this.state.active}
						>
							24
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 25 })}
							active={25 === this.state.active}
						>
							25
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 26 })}
							active={26 === this.state.active}
						>
							26
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 27 })}
							active={27 === this.state.active}
						>
							27
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 28 })}
							active={28 === this.state.active}
						>
							28
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 29 })}
							active={29 === this.state.active}
						>
							29
						</Pagination.Item>
						<Pagination.Item
							onClick={() => this.setState({ active: 30 })}
							active={30 === this.state.active}
						>
							30
						</Pagination.Item>
					</Pagination>

					{(() => {
						if (this.state.active === 1) {
							return <One />;
						} else if (this.state.active === 2) {
							return <Two />;
						} else if (this.state.active === 3) {
							if (this.props.pass === true) {
								return <Password />;
							} else return <Three />;
						} else if (this.state.active === 4) {
							return <Four />;
						} else if (this.state.active === 5) {
							return <Five />;
						} else if (this.state.active === 6) {
							return <Six />;
						} else if (this.state.active === 7) {
							return <Seven />;
						} else if (this.state.active === 8) {
							return <Eight />;
						} else if (this.state.active === 9) {
							return <Nine />;
						} else if (this.state.active === 10) {
							return <Ten />;
						} else if (this.state.active === 11) {
							return <Elevan />;
						} else if (this.state.active === 12) {
							return <Twelve />;
						} else if (this.state.active === 13) {
							return <Thirteen />;
						} else if (this.state.active === 14) {
							return <Fourteen />;
						} else if (this.state.active === 15) {
							return <Fifteen />;
						} else if (this.state.active === 16) {
							return <Sixteen />;
						} else if (this.state.active === 17) {
							return <Seventeen />;
						} else if (this.state.active === 18) {
							return <Eighteen />;
						} else if (this.state.active === 19) {
							return <Nineteen />;
						} else if (this.state.active === 20) {
							return <Twenty />;
						} else if (this.state.active === 21) {
							return <TwentyOne />;
						} else if (this.state.active === 22) {
							return <TwentyTwo />;
						} else if (this.state.active === 23) {
							return <TwentyThree />;
						} else if (this.state.active === 24) {
							return <TwentyFour />;
						} else if (this.state.active === 25) {
							return <TwentyFive />;
						} else if (this.state.active === 26) {
							return <TwentySix />;
						} else if (this.state.active === 27) {
							return <TwentySeven />;
						} else if (this.state.active === 28) {
							return <TwentyEight />;
						} else if (this.state.active === 29) {
							return <TwentyNine />;
						} else if (this.state.active === 29) {
							return <TwentyNine />;
						} else if (this.state.active === 30) {
							return <Thirty />;
						}
					})()}
					<Row style={{ marginTop: 30 }}>
						<Button
							style={{ marginRight: 300 }}
							onClick={() => {
								if (this.state.active === 1) {
									return;
								} else if (this.props.pass === true) {
									this.props.passChanged();
								} else this.setState({ active: this.state.active - 1 });
							}}
						>
							Back
						</Button>
						<Button
							onClick={() => {
								if (this.state.active === 30) {
									return;
								} else this.setState({ active: this.state.active + 1 });
							}}
						>
							Next
						</Button>
					</Row>
					{(() => {
						if (this.state.active === 30) {
							return (
								<Button onClick={() => this.props.history.push('/logout')}>
									Finish
								</Button>
							);
						}
					})()}
				</center>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	email: state.auth.email,
	pass: state.points.pass
});
export default connect(mapStateToProps, { emailChanged, passChanged })(
	withRouter(Question)
);
