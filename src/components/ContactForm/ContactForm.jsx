import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Box, Input, InputName, SubmitButton } from './ContactForm.styled';
import { getItems } from '../../redux/contactsSelectors';
import { itemsSlice } from '../../redux/myContacts/contactsSlice';
import * as yup from 'yup';

const idName = nanoid();
const idNumber = nanoid();

export const ContactsReviewForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contactsNames = items.map(item => item.name);
    if (contactsNames.includes(name)) {
      alert(` ${name} is already in contacts.`);
    } else {
      const newPerson = {
        name,
        number,
      };
      dispatch(itemsSlice.actions.addContact(newPerson));
    }
    resetForm();
  };

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(3).max(8).required(),
});

  return (
    <Formik initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}>
      <Box>
        <InputName>
          name
          <Input
            autoComplete="off"
            type="text"
            name="name"
            id={idName}
          />
        </InputName>
        <InputName>
          phone
          <Input
            autoComplete="off"
            type="tel"
            name="number"
            id={idNumber}
          />
        </InputName>
        <SubmitButton type="submit">Add contacts</SubmitButton>
      </Box>
    </Formik>
  );
};
