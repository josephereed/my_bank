import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './views/Signin'
import SignUp from './views/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
