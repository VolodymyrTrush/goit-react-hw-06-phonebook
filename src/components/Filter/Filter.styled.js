import styled from 'styled-components';

export const FilterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const FilterLabelTitle = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
`;

export const FilteInput = styled.input`
  width: 500px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
`;
