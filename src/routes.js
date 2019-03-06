import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { sessionService } from 'redux-react-session';
import App from './App';
import Signin from './components/signin';
import Instr from './components/Instr';
import One from './components/one';
import Question from './components/Questions';
import Two from './components/two';
import Three from './components/Three';
import Password from './components/password';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Seven from './components/Seven';
import Eight from './components/Eight';
import Nine from './components/Nine';
import Ten from './components/Ten';
import Elevan from './components/Elevan';
import Twelve from './components/twelve';
import Thirteen from './components/thirteen';
import Fourteen from './components/fourteen';
import Fifteen from './components/Fifteen';
import Sixteen from './components/Sixteen';
import Seventeen from './components/Seventeen';
import Eighteen from './components/Eighteen';
import Nineteen from './components/Nineteen';
import Twenty from './components/Twenty';
import TwentyOne from './components/TwentyOne';
import TwentyTwo from './components/TwentyTwo';
import TwentyThree from './components/TwentyThree';
import TwentyFour from './components/TwentyFour';
import TwentyFive from './components/TwentyFive';
import TwentySix from './components/TwentySix';
import TwentySeven from './components/TwentySeven';
import TwentyEight from './components/TwentyEight';
import TwentyNine from './components/TwentyNine';
import Thirty from './components/Thirty';
import Logout from './components/Logout';
import Email from './components/email';

import SetEmail from './components/SetEmail';

export default class Router extends Component {
  render() {
    return (
      <main>
        <SetEmail>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={Signin} />
            <Route path="/instructions" component={Instr} />
            <Route path="/questions" component={Question} />
            <Route path="/0" component={Email} />
            <Route path="/1" component={One} />
            <Route path="/2" component={Two} />
            <Route path="/3" component={Three} />
            <Route path="/password.php" component={Password} />
            <Route path="/4" component={Four} />
            <Route path="/5" component={Five} />
            <Route path="/6" component={Six} />
            <Route path="/7" component={Seven} />
            <Route path="/8" component={Eight} />
            <Route path="/9" component={Nine} />
            <Route path="/10" component={Ten} />
            <Route path="/11" component={Elevan} />
            <Route path="/12" component={Twelve} />
            <Route path="/13" component={Thirteen} />
            <Route path="/14" component={Fourteen} />
            <Route path="/15" component={Fifteen} />
            <Route path="/16" component={Sixteen} />
            <Route path="/17" component={Seventeen} />
            <Route path="/18" component={Eighteen} />
            <Route path="/19" component={Nineteen} />
            <Route path="/20" component={Twenty} />
            <Route path="/21" component={TwentyOne} />
            <Route path="/22" component={TwentyTwo} />
            <Route path="/23" component={TwentyThree} />
            <Route path="/24" component={TwentyFour} />
            <Route path="/25" component={TwentyFive} />
            <Route path="/26" component={TwentySix} />
            <Route path="/27" component={TwentySeven} />
            <Route path="/28" component={TwentyEight} />
            <Route path="/29" component={TwentyNine} />
            <Route path="/30" component={Thirty} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </SetEmail>
      </main>
    );
  }
}
