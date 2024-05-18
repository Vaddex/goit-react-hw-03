import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <div className={css.contactData}>
                <p>
                    <IoPerson /> {name}
                </p>
                <p>
                    <FaPhoneAlt /> {number}
                </p>
            </div>

            <button className={css.button} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}
