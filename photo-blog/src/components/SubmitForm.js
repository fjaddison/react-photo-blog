import React, { Component } from 'react'
import { Button, Row, Input } from 'react-materialize'

// import postRequest from thatfileWithTheAxiosStuff

const buttStyle = {
  backgroundColor: 'black'
}

class SubmitForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // make sure these mongoose schema matches the form name attrs
      title: '',
      pic: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addPicture()
  }

  render () {
    return (
      <Row>
        {/* each `name` attribute/prop is going to match the field (schema keys) in the mongoose model/database
      then! there should be an object on the SubmitForm component with matching keys also
      */}
        <Input onChange={this.handleChange} placeholder='Image Title' name='title' />
        <Input onChange={this.handleChange} placeholder='Image URL' name='pic' />
        <br />
        <Button onClick={this.handleSubmit} style={buttStyle} type='submit'>Submit Picture</Button>
      </Row>
    )
  }
}

export default SubmitForm
