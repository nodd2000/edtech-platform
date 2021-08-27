// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginScreen from './components/LoginScreen/LoginScreen';
import App from './App.js';


function Main() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
            <App />
        </Route>
        
        <Route path={["/login", "/register"]}>
          <LoginScreen />
        </Route>


      </Switch>
    </Router>

  )
}

export default Main;
