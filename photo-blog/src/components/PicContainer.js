import React, { Component } from 'react'
import { Navbar, Footer, Icon, NavItem } from 'react-materialize'
import { getRequest, postRequest } from '../requests'
import './PicContainer.css'
import SubmitForm from './SubmitForm'

class PicContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: []
    }
    this.addPicture = this.addPicture.bind(this)
  }

  componentDidMount () {
    getRequest()
      .then(response => this.setState({ pictures: response.data }))
      .catch(function (error) {
        console.log(error)
      })
  }

  addPicture (title, pic) {
    postRequest(title, pic)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
    console.log(title)
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
        <SubmitForm addPicture={this.addPicture} />
      </div>

    )
  }
}

export default PicContainer
