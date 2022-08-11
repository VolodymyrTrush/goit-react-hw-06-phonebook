import { ContactsReviewForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './styleConfig/container.styled';
import { Title } from './styleConfig/title.styled';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsReviewForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security

