import {useState, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Form} from '../../helpers/Form';
import Button from "../elements/Button";
import {useAlert} from 'react-alert';
import {jsonGet} from '../../helpers/Ajax';
import FieldBlock from '../elements/FieldBlock';
import { ContactContext } from '../../contexts/ContactContext';

function ContactForm(){

  const [, contactDispatch] = useContext(ContactContext);
  const history = useHistory();
  let {id} = useParams();
  const alert = useAlert();
  const [formUrl, setFormUrl] = useState('contacts');
  const [formMethod, setFormMethod] = useState('POST');
  const [fields, setFields] = useState({
    fname: {value:'',isInvalid:false, msg:""},
    lname: {value:'',isInvalid:false, msg:""},
    email: {value:'',isInvalid:false, msg:""},
    phone: {value:'',isInvalid:false, msg:""}
  });

  async function fetchContacts(){
    const resp = await jsonGet('contacts');
    if(resp.success) {
      contactDispatch({type:'setContacts', payload:{contacts: resp.data, total: resp.total}});
    }
  }

  const success = (resp) => {
    fetchContacts();
    history.push('/contacts');
    alert.show("Contact Saved.", {timeout: 5000});
  }

  async function fetchContactById(id){
    const resp = await jsonGet(`contacts/${id}`);
    if(resp.success) {
      form.populateFormValues(resp.contact);
    }
  }

  useEffect(() => {
    if(id === 'new') {
      form.clearFormValues();
      setFormMethod('POST');
      setFormUrl('contacts');
    } else {
      fetchContactById(id);
      setFormMethod('PATCH');
      setFormUrl(`contacts/${id}`);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const form = new Form(formUrl, fields, setFields, success, formMethod);

  return (
    <div>
      <h1>Create Contact</h1>
      <div className="d-flex flex-gap-18">
        <FieldBlock
          id="fname" label="First Name" isInvalid={fields.fname.isInvalid}
          value={fields.fname.value} onChange={form.handleInputChanges} feedback={fields.fname.msg}
        />
        <FieldBlock
          id="lname" label="Last Name" isInvalid={fields.lname.isInvalid}
          value={fields.lname.value} onChange={form.handleInputChanges} feedback={fields.lname.msg}
        />
        <FieldBlock
          id="email" label="Email"  type="email" isInvalid={fields.email.isInvalid}
          value={fields.email.value} onChange={form.handleInputChanges} feedback={fields.email.msg}
        />
        <FieldBlock
          id="phone" label="Phone" type="phone" isInvalid={fields.phone.isInvalid}
          value={fields.phone.value} onChange={form.handleInputChanges} feedback={fields.phone.msg}
        />
      </div>

      <div className="l_footer_buttons">
        <Button variant="secondary" onClick={()=>history.push('/contacts')}>Cancel</Button>
        <Button variant="primary" onClick={form.submitForm}>Save</Button>
      </div>
    </div>
  );
}

export default ContactForm;