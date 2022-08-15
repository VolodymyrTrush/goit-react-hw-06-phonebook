import { Formik, ErrorMessage } from 'formik';
import shortid from 'shortid';
import * as yup from 'yup';
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ErrorText,
} from './ContactForm.styled';
import { Button } from 'components/common/Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from 'store/contacts/contacts';
import { addContact } from 'store/contacts/contacts';

const phoneRegex = RegExp(
  /\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
);
const nameRegex = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);

const mySchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(
      nameRegex,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),

  number: yup
    .string()
    .length(7)
    .matches(
      phoneRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  const normalizedNumber = str => {
    const normalizedNumber =
      str[0] + str[1] + str[2] + '-' + str[3] + str[4] + '-' + str[5] + str[6];
    return normalizedNumber;
  };

  const contactsCheck = name => {
    const result = name.name.toLowerCase();
    const data = items.find(item => item.name.toLowerCase().includes(result));
    return data;
  };

  const handleSubmit = (values, { resetForm }) => {
    const newName = {
      id: shortid.generate(),
      name: values.name,
      number: normalizedNumber(values.number),
    };

    if (contactsCheck(newName)) {
      alert(`${newName.name} is already in contacts`);
    } else {
      dispatch(addContact(newName));
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={mySchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <ContactFormForm>
          <ContactFormLabel>
            Name
            <ContactFormInput
              type="text"
              name="name"
              placeholder="Rosie Simpson"
              value={props.values.name}
              onChange={props.handleChange}
            />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactFormLabel>
          <ContactFormLabel>
            Number
            <ContactFormInput
              type="tel"
              name="number"
              placeholder="Enter 7 digits"
              value={props.values.number}
              onChange={props.handleChange}
            />
            <ErrorMessage
              name="number"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactFormLabel>
          <Button type="submit">Add contact</Button>
        </ContactFormForm>
      )}
    </Formik>
  );
};
