import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import FieldBlock from "../elements/FieldBlock";
import {Form} from '../../helpers/Form';
import Button from "../elements/Button";
import {useAlert} from "react-alert";

function SignUp() {
    const history = useHistory();
    const alert = useAlert();
    const [fields, setFields] = useState({
        fname: {value:"", isInvalid: false, msg:""},
        lname: {value:"", isInvalid: false, msg:""},
        email: {value:"", isInvalid: false, msg:""},
        password: {value:"", isInvalid: false, msg:""},
        confirm_password: {value:"", isInvalid: false, msg:""}
    });

    function success(resp){
        history.push('/auth/login');
        alert.show("You are registered. You may now log in!", {timeout: 6000});
    }

    const form = new Form('users/signup', fields, setFields, success);

    return (
        <div>
           <h2>Create An Account To Get Started</h2>
           <FieldBlock 
                id="fname" label="First Name" isInvalid={fields.fname.isInvalid}
                value={fields.fname.value} onChange={form.handleInputChanges} feedback={fields.fname.msg}
           /> 

            <FieldBlock 
                id="lname" label="Last Name" isInvalid={fields.lname.isInvalid}
                value={fields.lname.value} onChange={form.handleInputChanges} feedback={fields.lname.msg}
           /> 

            <FieldBlock 
                id="email" label="Email" isInvalid={fields.email.isInvalid}
                value={fields.email.value} onChange={form.handleInputChanges} feedback={fields.email.msg}
           /> 

            <FieldBlock 
                id="password" label="Password" type="password" isInvalid={fields.password.isInvalid}
                value={fields.password.value} onChange={form.handleInputChanges} feedback={fields.password.msg}
           /> 

            <FieldBlock 
                id="confirm_password" label="Confirm Password" type="password" isInvalid={fields.confirm_password.isInvalid}
                value={fields.confirm_password.value} onChange={form.handleInputChanges} feedback={fields.confirm_password.msg}
           /> 

            <div className="l_footer_buttons d-flex justify-content-between align-items-center">
                <Link to="/auth/login">Already have an account? Log In</Link>
                <Button variant="primary" onClick={form.submitForm}>Sign Up</Button>
            </div>

        </div>
    );
}

export default SignUp;