import { useSelector, useDispatch } from 'react-redux';
import { List, Notification, ListItem } from "./ContactList.style";

import { Contact } from 'components/Contact/Contact'; 
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import { getContacts } from 'redux/selectors';

export const ContactList = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter)
  

 useEffect(() => {
  dispatch(fetchContacts());
 }, [dispatch]);
  
  console.log(contacts);
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



