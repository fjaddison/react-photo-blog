import React, { Component } from 'react'
import './App.css'
import { Button, Navbar, Footer, Icon, NavItem } from 'react-materialize'
import Head from './Head'
import PicContainer from './PicContainer'

const navStyle = {
  backgroundColor: '#FF9DC0'
}

class App extends Component {
  render () {
    return (
      <html>
        <Head />
        <div>
          <Navbar style={navStyle} className='nav' brand='imagini' href='/' >
            <NavItem href='/submit'>Submit</NavItem>
            <NavItem href='components.html'>Components</NavItem>
          </Navbar>
          <PicContainer />
        </div>
      </html>
    )
  }
}

export default App
