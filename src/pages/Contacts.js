import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';

import { Container } from '@mui/material';
import { Filter } from 'components/Filter/Filter';
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <h1
          style={{
            display: 'grid',
            maxWidth: 'fit-content',
            margin: '0 auto',
            padding: '16px',
          }}
        >
          Phonebook
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '20px',
          }}
        >
          <ContactForm />
          <div>
            <Filter />
            {isLoading && <b>'Request in progress...'</b>}
            <ContactsList />
          </div>
        </div>
      </Container>
    </>
  );
}
