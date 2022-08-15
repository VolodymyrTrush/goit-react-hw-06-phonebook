import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/common/Notification.styled';
import { Container } from 'components/common/Container.styled';
import { useSelector } from 'react-redux';
import { getItems } from 'store/contacts/contacts';

export const App = () => {
  const contacts = useSelector(getItems);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Notification>There are no contacts in the phone book.</Notification>
      )}
    </Container>
  );
};
