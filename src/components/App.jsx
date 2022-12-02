

import { Container } from "./Container/Container";
import { MainTitle } from './Titles/MainTitle/MainTitle'
import { ContactForm } from "./ContactForm/ContactForm";
import { SecondaryTitle } from "./Titles/SecondaryTitle/SecondaryTitle";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";


export const App = () => {

  return (
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <MainTitle title='Phonebook' />
        <ContactForm />
        <SecondaryTitle title='Contacts' />
        <Filter/>
        <ContactList  />
      </Container>
  )  
}

