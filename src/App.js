import React from 'react'
import './App.css'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import Home from "./components/Home"
import Login from './components/Login'
import Nav from './components/Nav'
import Cookie from './components/Cookie'

export class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      popupModal: true
    }
  }    
  
  componentDidMount() {
    if(document.cookie){
      this.setState({
        popupModal: false
      });
    }
  }

  render() {
    return (
      <div>
        { this.state.popupModal ? <Cookie /> : null }
        <Router>
          <div className="App" style={{background: "#121212"}}>
            <Switch>
            <Route path="/login">
                <Nav />
                <Login />
              </Route>
              <Route path="/about">
                <Nav />
                <About />
              </Route>
              <Route path="/contact">
                <Nav />
                <Contact />
              </Route>
              <Route path="/">       
                <Nav />
                <Home />
              </Route>            
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

