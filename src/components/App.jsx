import { Container } from "components/Container/Container";
import { MainTitle } from 'components/Titles/MainTitle/MainTitle'
import { ContactForm } from "components/ContactForm/ContactForm";
import { SecondaryTitle } from "components/Titles/SecondaryTitle/SecondaryTitle";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";


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

