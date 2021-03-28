import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './views/Signin';
import SignUp from './views/Signup';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './helpers/ProtectedRoute';
import authenticate from './helpers/authenticate';
import { connect } from 'react-redux';
import { axiosRequest } from './actions';

function App({ axiosRequest, dispatch }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (authenticate()) {
      setAuthenticated(true);
    }
    axiosRequest('/api/users/currentuser');
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

const mapDispatchToProps = (dispatch) => {
  return {
    axiosRequest: (url) => {
      dispatch(axiosRequest(url));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
