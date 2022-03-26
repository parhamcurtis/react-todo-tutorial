import React from 'react';
import {AuthStore} from './AuthContext';
import {TodoStore} from './TodoContext';
import {positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function ContextProvider(props){
    return(
        <AuthStore>
            <TodoStore>
                <AlertProvider template={AlertTemplate} options={{position:positions.BOTTOM_CENTER}}>
                    {props.children}
                </AlertProvider>
            </TodoStore>
        </AuthStore>
    );
} 

export default ContextProvider;