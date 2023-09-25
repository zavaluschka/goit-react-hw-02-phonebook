import PhoneBook from "./PhoneBook/PhoneBook";
import React, {Component} from "react";

export class App extends Component {

  handleAddContact = (contactData) => {
    console.log('contactData:', contactData)
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
