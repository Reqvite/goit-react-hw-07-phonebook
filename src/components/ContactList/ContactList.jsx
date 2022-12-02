import { useSelector, useDispatch } from 'react-redux';
import { List, Notification, ListItem } from "./ContactList.style";

import { Contact } from 'components/Contact/Contact'; 
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
   const { items: contacts, isLoading, error } = useSelector(fetchContacts);

 useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
//  const renderFilterList = () => {
//     return contacts
//       .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
//   }
  
//  const filterContacts = renderFilterList()
  
    return (
      <List>
        {contacts?.map(contact => 
                <ListItem key={contact.id} >
                <Contact contact={contact}/>
                </ListItem> )}
          {/* {contacts.length === 0
               ? <Notification>You don't have contacts.</Notification>
               :filterContacts.length === 0
               ? <Notification>No contacts were found matching your request.</Notification>
               :filterContacts.map(contact => 
                <ListItem key={contact.id} >
                <Contact contact={contact}/>
                </ListItem> )}   */}
        </List>
    )
}



