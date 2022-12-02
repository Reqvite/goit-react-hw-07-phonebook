import PropTypes from 'prop-types';
import {  useDeleteContactMutation } from 'redux/contactsApi';

import { Name, DeleteBtn } from './Contact.styled'


export const Contact = ({ contact }) => {
    const { id, name, phone } = contact;

  const [deleteContact] = useDeleteContactMutation();
  
    return (
     <>
            <Name>
                {name}
             </Name>
             <span>{phone}</span>
             <DeleteBtn type="button" onClick={() => deleteContact(id)}>Delete</DeleteBtn>
    </>
)
   
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}