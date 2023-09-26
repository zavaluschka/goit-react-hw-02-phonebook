import PhoneBook from "./PhoneBook/PhoneBook";
import React, { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {

  handleAddContact = (contactData) => {
    console.log('contactData:', contactData)
    this.setState(prevState => {
      return {
        name:[...prevState.contactData, name]
      }
})
  }
 
  render(){
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <PhoneBook handleAddContact={this.handleAddContact } />
      
      </div>
    );
  }
};
