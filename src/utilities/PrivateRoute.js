import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {

  const user = localStorage.getItem('jwtToken')
  return <Route {...rest} render={(props) => {
      return user ? <Component {...rest} {...props} /> : <Redirect to="/" />
  }} />
}

export default PrivateRoute