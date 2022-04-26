import React from 'react';
import {PropTypes} from 'prop-types';

const Button = (props) => {
    let klass = `btn btn--${props.variant}`;
    if(props.hasOwnProperty('className')) {
        klass += " " +props.className;
    }
    if(props.hasOwnProperty('size')){
        klass += ` btn--${props.size}` 
    }
    return(
        <button className={klass} onClick={props.onClick} style={props.style}>{props.children}</button>
    );
}

Button.defaultProps = {
    variant: "secondary",
    onClick: () => {}
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired
};

export default Button;