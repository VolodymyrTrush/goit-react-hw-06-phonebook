import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContactFormForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${p => p.theme.space[3]}px;
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const ContactFormInput = styled(Field)`
  width: 500px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
`;

export const ErrorText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 14px;
  color: red;
`;
