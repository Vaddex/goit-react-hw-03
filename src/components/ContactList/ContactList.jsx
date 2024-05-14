import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

const ContactList = () => {
    return (
        <ul className={css.container}>
            <li>
                <Contact />
            </li>
        </ul>
    );
};

export default ContactList;
