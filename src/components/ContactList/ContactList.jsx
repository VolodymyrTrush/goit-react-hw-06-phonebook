import {
  ContactListList,
  ContactListItem,
  ContactsListText,
} from './ContactList.styled';
import { Button } from 'components/common/Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter, deleteContact } from 'store/contacts/contacts';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const deleteItems = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    const normalizedContacts = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedContacts)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactListList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactsListText>
            <span>{name}: </span>
            <span>{number}</span>
          </ContactsListText>
          <Button type="button" onClick={() => deleteItems(id)}>
            Delete
          </Button>
        </ContactListItem>
      ))}
    </ContactListList>
  );
};
