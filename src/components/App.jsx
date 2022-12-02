

import { Container } from "./Container/Container";
import { MainTitle } from './Titles/MainTitle/MainTitle'
import { ContactForm } from "./ContactForm/ContactForm";
import { SecondaryTitle } from "./Titles/SecondaryTitle/SecondaryTitle";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";


export const App = () => {
   const dispatch = useDispatch()


   useEffect(() => {
  dispatch(fetchContacts());
   }, [dispatch]);

  return (
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <MainTitle title='Phonebook' />
        <ContactForm />
      <SecondaryTitle title='Contacts' />
      <Filter />  
            <ContactList/>
      </Container>
  )  
}

