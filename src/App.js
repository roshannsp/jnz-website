import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Body from './components/Body'
import Jenosize from './pages/Jenosize'
import Restaurants from './pages/Restaurants'
import Map from './pages/Map'

function App() {
  return (
    <Router>
      <TopNav></TopNav>
      <Body>
        <Switch>
          <Route path="/Jenosize">
            <Jenosize />
          </Route>
          <Route path="/Restaurants">
            <Restaurants />
          </Route>
          <Route path="/Map">
            <Map />
          </Route>
          <Route exec path="/">
            <Redirect to="/Jenosize" />
          </Route>
        </Switch>
      </Body>
      <Footer></Footer>
    </Router>
  )
}

export default App
