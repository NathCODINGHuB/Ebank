import {Switch, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />

    <Route path="*" component={NotFound} />
  </Switch>
)

export default App
