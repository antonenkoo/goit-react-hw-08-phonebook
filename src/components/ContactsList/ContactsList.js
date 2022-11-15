import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactsList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useFilter } from 'hooks/useFilter';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useFilter();

  const visibleContacts = contacts.filter(contact => {
    return filter
      ? contact.name.toLowerCase().includes(filter.toLowerCase())
      : contact;
  });

  return (
    <>
      {Array.isArray(visibleContacts) && (
        <ul className={css.list}>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id}>
                <ContactItem contact={contact} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
