import React, { Component } from 'react'

export default class PhoneBook extends Component {
  state = {
  number: '',
  name: ''
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const contactData = this.state.name 
        this.props.handleAddContact(contactData)
        this.setState(
            {
                number: '',
                name: ''
            }
        )
    }
  render() {
    return (
        <div>
            <form onSubmit={event => {
          this.setState({ name: '', number: '' });

          this.props.handleAddContact({
            event,
            name: this.state.name,
            number: this.state.number,
          });
        }}
            >
                <h2>Phonebook</h2>
                <label>
                    Name
                    <input onChange={this.handleInputChange} value={this.state.name} name="name" type="text" required/>
                </label>
                <label>
                    Number
                    <input onChange={this.handleInputChange} value={this.state.number} name="number" type="tel" required/>
                </label>
                <button type="submite">add contact</button>
        </form>
      </div>
    )
  }
}
