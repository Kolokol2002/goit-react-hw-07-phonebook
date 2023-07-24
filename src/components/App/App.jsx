import Form from '../Form';
import Contacts from '../Contacts';
import Title from '../Title';
import Filter from '../Filter';
import { MainContainer } from './App.styled';
import { getContacts, getError, getIsLoading } from 'redux/selectors.';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <Title title={'Phonebook'}>
        <Form />
      </Title>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length !== 0 && (
        <Title title={'Contacts'}>
          <Filter />
          <Contacts />
        </Title>
      )}
    </MainContainer>
  );
}

export default App;
