import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import contactsData from '../contactsData.json';

function App() {
    const [contactsFilter, setFilter] = useState('');

    const [contacts, setContacts] = useState(() => {
        const storageContact = window.localStorage.getItem('saveContact');
        return storageContact !== null
            ? JSON.parse(storageContact)
            : contactsData;
    });

    useEffect(() => {
        window.localStorage.setItem('saveContact', JSON.stringify(contacts));
    }, [contacts]);

    const onDelete = contactId => {
        setContacts(prevContacts => {
            return prevContacts.filter(contact => contact.id !== contactId);
        });
    };

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );

    const addContact = newContact => {
        setContacts(prevContact => {
            return [...prevContact, newContact];
        });
    };

    return (
        <>
            <div>
                <h1 className="titleText">Phonebook</h1>
                <ContactForm addContact={addContact} />
                <SearchBox value={contactsFilter} onFilter={setFilter} />
                <ContactList contacts={visibleContacts} onDelete={onDelete} />
            </div>
        </>
    );
}

export default App;
