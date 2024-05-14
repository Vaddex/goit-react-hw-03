import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

// const initalContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const ContactForm = () => {
    const id = useId();

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required!'),
        number: Yup.string()
            .email('Must be a valid email!')
            .required('Required'),
    });
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm('');
    };
    const initialValues = {
        name: '',
        number: '',
    };

    return (
        <div className={css.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={FeedbackSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label id={`${id}-name`}>Name</label>
                        <Field id={`${id}-name`} type="text" name="name" />
                    </div>

                    <div>
                        <label id={`${id}-number`}>
                            Number
                            <Field
                                id={`${id}-number`}
                                type="phone"
                                name="number"
                            />
                        </label>
                    </div>

                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
