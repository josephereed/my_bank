import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './views/Signin';
import SignUp from './views/Signup';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './helpers/ProtectedRoute';
import authenticate from './helpers/authenticate';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (authenticate()) {
      setAuthenticated(true);
    }
    //return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            auth={isAuthenticated}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
