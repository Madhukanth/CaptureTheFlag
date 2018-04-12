import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

class Instr extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Instructions</h1>
        </center>
        <div style={{ marginLeft: 200, fontSize: 20 }}>
          <ol>
            <li>
							DO NOT REFRESH THE PAGE.IF YOU REFRESH ,YOUR POINTS WILL BECOME
							ZERO AND YOU WILL BE ELIMINATED
            </li>
            <li> USE THE BUTTONS TO NAVIGATE TO YOUR DESIRED PAGE</li>
            <li>2 MEMBERS PER TEAM </li>
            <li>FILL UP YOUR DETAILS CORRECTLY IN THE REGISTER FORM</li>
            <li>TOTALLY 30 QUESTIONS WILL BE THERE</li>
            <li>YOU HAVE 45 MINUTES TO COMPLETE THE EVENT.</li>
            <li>AFTER 45 MINUTES YOU WILL BE AUTOMATICALLY LOGGED OUT</li>
            <li>HINTS WILL BE PROVIDED FOR EACH QUESTION</li>
            <li>BROWSING FOR THE SOLUTIONS WILL LEAD TO DISQUALIFICATION</li>
            <li>JUDGEMENT WILL BE BASED ON TIMING AND POINTS YOU SCORED</li>
            <li>EVALUATION WILL BE BASED ON MINIMUM CLUES TRACKED</li>
            <li>SURFING THROUGH OTHER WEBSITES SHOULD BE STRICTLY AVOIDED</li>
            <li>DONT USE YOUR MOBILE PHONE UNTIL EVENT GETS OVER</li>
            <li>PLEASE LOGOUT AFTER COMPLETING 30 QUESTIONS</li>
            <li>100 POINTS WILL BE GIVEN FOR EACH QUESTIONS</li>
            <li>
							TEAM MEMBERS WHO OBTAINE THE MAXIMUM POINTS WITH LESS TIME WILL BE
							AWARDED WITH THE CASH PRIZE.
            </li>
          </ol>
        </div>
        <center>
          <Button onClick={() => this.props.history.push('/questions')}>
						START EVENT
          </Button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
});
export default connect(mapStateToProps, null)(withRouter(Instr));
