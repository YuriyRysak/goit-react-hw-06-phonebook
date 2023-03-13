
import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import './App.module.css';
import { getContacts } from 'redux/selectors';


export const App = () => {

    const contact = useSelector(getContacts);

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </section>
  );
};

 
  
  
