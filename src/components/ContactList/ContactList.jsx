import { List, Notification, ListItem } from "./ContactList.style";

import { Contact } from 'components/Contact/Contact'; 
import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector } from "react-redux";

import { Loader } from "components/Loader/Loader";


export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  
 const renderFilterList = () => {
    return contacts
      ?.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
  }
  
 const filterContacts = renderFilterList()

    return (
      <List>
        {error && <Notification>{error.error}</Notification>}
        {isLoading && <Loader/>}
        {contacts &&
        contacts?.length === 0
         ? <Notification>You don't have contacts.</Notification>
             :filterContacts?.length === 0
         ? <Notification>No contacts were found matching your request.</Notification>
             :filterContacts?.map(contact => 
              <ListItem key={contact.id} >
                <Contact contact={contact}/>
              </ListItem> )
         }
        </List>
    )
}



