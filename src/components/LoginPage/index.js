import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginPage extends Component {
  state = {userId: '', pin: '', errorMessage: ''}

  componentDidMount() {
    const Token = Cookies.get('jwt_token')

    if (Token !== undefined) {
      return <Redirect to="/" />
    }
    return this.render()
  }

  handleUserIdChange = event => {
    this.setState({userId: event.target.value})
  }

  handlePinChange = event => {
    this.setState({pin: event.target.value})
  }

  handleLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const {history} = this.props

    const response = await fetch('https://apis.ccbp.in/ebank/login', {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        pin,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      this.setState({errorMessage: ''})
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})

      history.replace('/')
    } else {
      this.setState({errorMessage: data.error_msg})
    }
  }

  render() {
    const {errorMessage, userId, pin} = this.state

    return (
      <div className="MainContainer">
        <div className="LoginContainer">
          <img
            className="LoginImg"
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
            alt="website login"
          />
          <form className="FormContainer" onSubmit={this.handleLogin}>
            <h1 className="FormHeading">Welcome Back!</h1>
            <div className="InputLabelContainer">
              <label className="Label" htmlFor="userId">
                User ID
              </label>
              <input
                placeholder="Enter User Id"
                className="Input"
                type="text"
                id="userId"
                value={userId}
                onChange={this.handleUserIdChange}
              />
            </div>
            <div className="InputLabelContainer">
              <label className="Label" htmlFor="pin">
                PIN
              </label>
              <input
                placeholder="Enter Pin"
                className="Input"
                type="password"
                id="pin"
                value={pin}
                onChange={this.handlePinChange}
              />
            </div>

            <button className="SubmitButton" type="submit">
              Login
            </button>
            {errorMessage && <p className="ErrorMsg">{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
