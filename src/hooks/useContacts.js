import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectAllContacts);
  return contacts;
};
