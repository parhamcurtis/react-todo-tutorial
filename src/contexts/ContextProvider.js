import React from 'react';
import {AuthStore} from './AuthContext';
import {positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function ContextProvider(props){
    return(
        <AuthStore>
            <AlertProvider template={AlertTemplate} options={{position:positions.BOTTOM_CENTER}}>
                {props.children}
            </AlertProvider>
        </AuthStore>
    );
} 

export default ContextProvider;