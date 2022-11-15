import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    return dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={handleDelete}>Delete contact</button>
    </div>
  );
};
