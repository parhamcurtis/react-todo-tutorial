import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {useAlert} from 'react-alert';
import { ContactContext } from '../../contexts/ContactContext';
import Button from '../elements/Button';
import { jsonDelete } from '../../helpers/Ajax';

function Contacts() {

  const alert = useAlert();
  const [contactStore, contactDispatch] = useContext(ContactContext);

  async function handleDelete(id){
    if(window.confirm("Are you sure you want to delete this contact? This cannot be undone!")) {
      const resp = await jsonDelete(`contacts/${id}`);
      if(resp.success) {
        contactDispatch({type:'contactDeleted', payload:id});
        alert.show("Contact Deleted", {timeout: 4000});
      }
    }
  }

  const contactList = contactStore.contacts.map((contact, index) => (
    <tr key={index}>
      <td>{contact.fname}</td>
      <td>{contact.lname}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>
        <Link className="btn btn--xs btn--primary" to={`/contacts/${contact.id}`}>Edit</Link>
        <Button variant="danger" size="xs" onClick={()=> handleDelete(contact.id)} style={{marginLeft:8}}>Delete</Button>

      </td>

    </tr>
  ));

  return(
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>My Contacts</h1>
        <Link to="/contacts/new" className="btn btn--primary-alt">Create Contact</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactList}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;