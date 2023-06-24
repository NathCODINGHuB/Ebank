import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const LogOutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="HeaderContainer">
      <div className="InnerHeaderContainer">
        <img
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />

        <button className="Bn" type="button" onClick={LogOutClicked}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
