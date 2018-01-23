import React, { Component } from 'react'
import { Button, Navbar, Footer, Icon, NavItem, Row, Input } from 'react-materialize'
import getRequest from '../requests'
import postRequest from '../requests'
import './PicContainer.css'

const buttStyle = {
  backgroundColor: 'black'
}

class PicContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: []
    }
  }

  componentDidMount () {
    getRequest
      .then(response => this.setState({ pictures: response.data }))
  }

  handlePost () {
    postRequest
      .then(response => this.se)
  }

  render () {
    let pictures = this.state.pictures.map((picture, index) => {
      return (
        <div key={index}>
          <p>{picture.title}</p>
          <img src={picture.pic} alt={picture.title} />
        </div>
      )
    })
    return (
      <div className='container'>
        {pictures}
        <Row>
          <Input />
          <Input />
          <br />
          <Button style={buttStyle} type='submit'>Submit Picture</Button>
        </Row>
      </div>

    )
  }
}

export default PicContainer
