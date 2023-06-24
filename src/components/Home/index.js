import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="MainContainerHome">
        <Header />
        <div className="HomeContent">
          <h1>Your Flexibility, Our Excellence</h1>
          <img
            className="DigitalImg"
            alt="digital card"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          />
        </div>
      </div>
    )
  }
}

export default Home
