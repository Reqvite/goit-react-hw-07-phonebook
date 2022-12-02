import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/operations';


import { Name, DeleteBtn } from './Contact.styled'


export const Contact = ({ contact }) => {
    const { id, name, phone } = contact;

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));
    
    return (
     <>
            <Name>
                {name}
             </Name>
             <span>{phone}</span>
             <DeleteBtn type="button" onClick={handleDelete}>Delete</DeleteBtn>
    </>
)
   
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}