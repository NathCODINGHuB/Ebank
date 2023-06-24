import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const Token = Cookies.get('jwt_token')
  if (Token !== undefined) {
    return <Route {...props} />
  }
  return <Redirect to="/ebank/login" />
}
export default ProtectedRoute
