import React, {Component} from 'react';
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
        <button className={klass} onClick={props.onClick}>{props.children}</button>
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


// class based component just here for example
export class Btn extends Component {
    render() {
        return(
            <button>{this.props.children}</button>
        );
    }
}

export default Button;