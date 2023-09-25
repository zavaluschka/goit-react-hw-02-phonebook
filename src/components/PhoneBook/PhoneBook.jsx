import React, { Component } from 'react'

export default class PhoneBook extends Component {
  state = {
  contacts: [],
  name: ''
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAddContact("Hello")
    }
  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h2>Phonebook</h2>
                <label>
                    Name
                    <input onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                </label>
                <button type="submite">add contact</button>
        </form>
      </div>
    )
  }
}
