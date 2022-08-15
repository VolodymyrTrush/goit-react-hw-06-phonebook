import { FilterLabelTitle, FilterFormLabel, FilteInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getFilter } from '../../store/contacts/contacts';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FilterFormLabel>
      <FilterLabelTitle>Find contacts by name:</FilterLabelTitle>
      <FilteInput
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={handleFilter}
      />
    </FilterFormLabel>
  );
};
