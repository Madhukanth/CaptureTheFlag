import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { sessionService } from 'redux-react-session';

class Logout extends Component {
	logout = () => {
		sessionService.deleteSession().then(() =>
			sessionService.deleteUser().then(() => {
				this.props.history.push('/');
				console.log('DELETED');
			})
		);
	};

	render() {
		return (
			<center>
				<div style={{ marginTop: 300 }}>
					<h3>
						Congratulations...You have successfully completed the event!!!
					</h3>
					<Button onClick={() => this.logout()}>LOGOUT</Button>
				</div>
			</center>
		);
	}
}

export default Logout;
