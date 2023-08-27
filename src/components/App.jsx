import { Component} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Wrap } from "./App.styled";

const localStorageContactKey = 'Contacts book'

export class App extends Component {
  state = {
    contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(localStorageContactKey);
    if (savedContacts !== null) {
       this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: nextContacts } = this.state;
    console.log(prevContacts);
    console.log(nextContacts);

    if (prevContacts !== nextContacts) {
      localStorage.setItem(localStorageContactKey, JSON.stringify(nextContacts));
    }
  }

  changeContactFilter = newFilter => {
    this.setState(prevState => {
      return {
        filter:  newFilter
      }
    })
    console.log(this.state);
  }

  getVisibleFilteredItems = () => {
    const { filter, contacts } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(lowerCaseFilter);
      return hasName
    })
  }


  addContact = (newContact, nameContact, numberContact) => {
    const { contacts } = this.state;
    let nameArray = []
    contacts.map(obj => {
      
      nameArray.push(obj.name)
          return nameArray
    })
    console.log(nameArray);
    if (nameArray.includes(newContact.name)) {
      return alert(`${newContact.name} is already in contacts`)
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
        name: prevState.name + nameContact,
        number:  prevState.number + numberContact,
      }
    })
    
  }

  deleteContact = (contactId) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact=> contact.id !== contactId)
      }
    })
  }


  render(){
    return (
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm onAdd={ this.addContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeContactFilter } />
        <ContactList filteredContacts={this.getVisibleFilteredItems()} onDelete={ this.deleteContact } />
      </Wrap>
    );
   } 
  }

