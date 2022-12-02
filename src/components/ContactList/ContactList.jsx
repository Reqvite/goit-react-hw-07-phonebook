import { useSelector} from 'react-redux';
import { List, Notification, ListItem } from "./ContactList.style";

import { Contact } from 'components/Contact/Contact'; 
import { Loader } from 'components/Loader/Loader';

import { getContacts, getError, getFilter, getIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)


  function handleFilter() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
  }
  handleFilter()

  const filterContacts = handleFilter();
  
    return (
      <List>
        {isLoading ? <Loader />
          :contacts &&
        error ? <Notification>{error}</Notification>
           : contacts?.length === 0
         ? <Notification>You don't have contacts.</Notification>
             :filterContacts?.length === 0
         ? <Notification>No contacts were found matching your request.</Notification>
             :filterContacts?.map(contact => 
              <ListItem key={contact.id} >
                <Contact contact={contact}/>
              </ListItem> )}
        </List>
    )
}



