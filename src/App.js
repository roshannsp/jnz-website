import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Jenosize from './pages/Jenosize'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Jenosize">
          <Jenosize />
        </Route>
        <Route exec path="/">
          <Redirect to="/Jenosize" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
