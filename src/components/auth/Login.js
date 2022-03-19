import {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import FieldBlock from '../elements/FieldBlock';
import {Form} from '../../helpers/Form';
import Button from "../elements/Button";
import {AuthContext} from "../../contexts/AuthContext";

function Login(){
    const history = useHistory();
    const [fields, setFields] = useState({
        email: {value:"", isInvalid:false, msg:""},
        password: {value:"", isInvalid:false, msg:""}
    });

    async function success(resp){
        console.log(resp);
    }

    const form = new Form('users/login', fields, setFields, success);

    return(
        <div>
            <h2>Log In</h2>
            <FieldBlock
                    id="email" value={fields.email.value} onChange={form.handleInputChanges} 
                    label="Username:" isInvalid={fields.email.isInvalid} feedback={fields.email.msg}
               />
            <FieldBlock
                id="password" value={fields.password.value} onChange={form.handleInputChanges}
                label="Password:" type="password" feedback={fields.password.msg} isInvalid={fields.password.isInvalid}
            />
            <div className="l_footer_buttons d-flex justify-content-between align-items-center">
                <Link to="/auth/signup">Register</Link>
                <Button variant="primary" onClick={form.submitForm}>Log In</Button>
            </div>

        </div>
    );
}

export default Login;