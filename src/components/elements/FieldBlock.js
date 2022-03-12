import PropTypes from 'prop-types';

const FieldBlock = (props) => {
    const invalidClass = props.isInvalid? "is-invalid" : "";
    return(
        <div className={`form-group ${invalidClass}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                className="form-control" id={props.id} name={props.name || props.id} value={props.value} 
                type={props.type} onChange={props.onChange}
            />
            <p className="form-feedback">{props.feedback}</p>
        </div>
    );
}

FieldBlock.defaultProps = {
    type: "text",
    value: "",
    isInvalid: false
}

FieldBlock.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    feedback: PropTypes.string, 
    onChange: PropTypes.func.isRequired,
    isInvalid: PropTypes.bool.isRequired
}

export default FieldBlock