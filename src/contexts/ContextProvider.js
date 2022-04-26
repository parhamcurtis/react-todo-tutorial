import React from 'react';
import {AuthStore} from './AuthContext';
import {TodoStore} from './TodoContext';
import { ContactStore } from './ContactContext';
import {positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function ContextProvider(props){
    return(
        <ContactStore>
            <AuthStore>
                <TodoStore>
                    <AlertProvider template={AlertTemplate} options={{position:positions.BOTTOM_CENTER}}>
                        {props.children}
                    </AlertProvider>
                </TodoStore>
            </AuthStore>
        </ContactStore>  
    );
} 

export default ContextProvider;