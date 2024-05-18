import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

export default function ContactList({ addContact }) {
    const id = useId();

    const validation = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        number: Yup.string()
            .min(3, 'Too short')
            .max(12, 'Too long')
            .required('Required'),
    });

    const initialContact = {
        name: '',
        number: '',
    };

    const handleSubmit = (values, actions) => {
        addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });

        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialContact}
            onSubmit={handleSubmit}
            validationSchema={validation}
        >
            <Form className={css.container}>
                <div className={css.fieldBox}>
                    <label htmlFor={`${id}-name`}>Name</label>
                    <Field
                        className={css.inputField}
                        id={`${id}-name`}
                        type="text"
                        name="name"
                    />
                    <ErrorMessage
                        className={css.errorMessage}
                        name="name"
                        component="span"
                    />
                </div>

                <div className={css.fieldBox}>
                    <label htmlFor={`${id}-number`}>Number</label>
                    <Field
                        className={css.inputField}
                        id={`${id}-number`}
                        type="tel"
                        name="number"
                    />
                    <ErrorMessage
                        className={css.errorMessage}
                        name="number"
                        component="span"
                    />
                </div>

                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
