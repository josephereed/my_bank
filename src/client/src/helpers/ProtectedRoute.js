import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { path, exact, component } = props;

  const condition = localStorage.token;

  return condition ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
