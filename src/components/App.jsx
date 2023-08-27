import {useEffect, useState} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Wrap } from "./App.styled";

const localStorageContactKey = 'Contacts book'

const baseContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getStorageContacts = () => {
  const savedContacts = localStorage.getItem(localStorageContactKey);
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
  }
  return baseContacts;
    }


export const App = () => {
  const [contacts, setContacts] = useState(getStorageContacts);
  const [filter, setFilter] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem(localStorageContactKey, JSON.stringify(contacts))
  }, [contacts]);

  const changeContactFilter = newFilter => {
   return setFilter(newFilter)
  };

  const getVisibleFilteredItems = () => {
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(lowerCaseFilter);
      return hasName
    })
  };
  
  const visibleContacts = getVisibleFilteredItems();

  const addContact = (newContact, nameContact, numberContact) => {
    let nameArray = []
    contacts.map(obj => {
      nameArray.push(obj.name)
          return nameArray
    })

    if (nameArray.includes(newContact.name)) {
      return alert(`${newContact.name} is already in contacts`)
    }

    setContacts(prevState => [ ...prevState, newContact]);
    // setName(prevState => ({ prevState, nameContact }));
    // setNumber(prevState => ({ prevState, numberContact }));
    
  }

   const deleteContact = (contactId) => {
    setContacts(prevState => 
       prevState.filter(contact=> contact.id !== contactId)
    )
  }

  return (
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={changeContactFilter} />
        <ContactList filteredContacts={visibleContacts} onDelete = {deleteContact }/>
      </Wrap>
  );
  
}
