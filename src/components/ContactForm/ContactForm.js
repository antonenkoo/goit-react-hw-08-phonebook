import { useContacts } from 'hooks/useContacts';
import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const scheme = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('This field is Required'),
  number: yup
    .string()
    .required('This field is Required')
    .min(6, 'Too Short!')
    .max(13, 'Too Long!')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useContacts();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;


    if (name === '' || number === '' || name.includes('  ')) {
      return toast.error('Form is still empty !');
    }
    if (contacts.find(contact => contact.name === name)) {
      return toast.error(`${name} is already in list`);
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
      <Formik
        validationSchema={scheme}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <>
          <div className={css.divStyled}>
            <Form autoComplete="off" className={css.formStyled}>
              <label htmlFor="name" className={css.labelStyled}>
                Name
                <Field type="input" name="name" className={css.inputStyled} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.errorMessage}
                />
              </label>

              <label htmlFor="number" className={css.labelStyled}>
                Phone number
                <Field type="tel" name="number" className={css.inputStyled} />
                <ErrorMessage
                  name="number"
                  component="div"
                  className={css.errorMessage}
                />
              </label>
              <button type="submit" className={css.buttonStyled}>
                Add contact
              </button>
            </Form>
          </div>
        </>
      </Formik>
    </>
  );
};
