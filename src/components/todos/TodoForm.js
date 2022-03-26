import {useState, useContext} from 'react';
import {Form} from '../../helpers/Form';
import FieldBlock from '../elements/FieldBlock';
import Button from '../elements/Button';
import {useAlert} from 'react-alert';
import {TodoContext} from '../../contexts/TodoContext';


function TodoForm() {
    const [fields, setFields] = useState({
        name: {value:'', isInvalid:false, msg:''},
        completed: {value:0, isInvalid:false, msg:''}
    })

    const [todoStore, todoDispatch] = useContext(TodoContext);

    const alert = useAlert();

    function success(resp) {
        todoDispatch({type: 'AddTodo', payload: resp.todo});
        alert.show("Todo Added", {timeout: 4000});
        const newFields = fields;
        newFields.completed.value = 0;
        setFields(newFields);
    }

    const form = new Form('todos/', fields, setFields, success);

    return (
        <div className="poster flex-grow-1">
            <h3>Add New Todo</h3>
            <FieldBlock
                id="name" label="Todo" isInvalid={fields.name.isInvalid}
                value={fields.name.value} onChange={form.handleInputChanges} feedback={fields.name.msg}
            />
            <div className="l_footer_buttons">
                <Button variant="primary" onClick={form.submitForm}>Create Todo</Button>
            </div>
        </div>
    );
}

export default TodoForm;