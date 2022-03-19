import React, {createContext, useReducer, useEffect} from 'react';
import {jsonGet} from '../helpers/Ajax';

export const AuthContext = createContext();



function reducer(store, action) {
    switch(action.type) {
        case 'login':
            localStorage.setItem(store.tokenName, action.payload);
            return {...store, loggedIn: true}
        case 'setUser':
            return {...store, user: action.payload};
        case 'isLoggedIn':
            const loggedIn = localStorage.getItem(store.tokenName) !== null;
            return {...store, loggedIn: loggedIn};
        case 'logout':
            localStorage.removeItem(store.tokenName);
            return {...store, loggedIn: false, user: {}}
        default: return store;
    }
}

export function AuthStore(props) {
    const [store, dispatch] = useReducer(reducer, {
        tokenName: 'userJWTToken', loggedIn: (localStorage.getItem('userJWTToken') !== null), user: {}
    });
    
    useEffect(() => {
        if(store.loggedIn && !store.user.hasOwnProperty('id')) {
            getUser();
        }
    }, [store.loggedIn])

    async function getUser(){
        if(store.loggedIn && !store.user.hasOwnProperty('id')) {
            const resp = await jsonGet('users/loggedInUser');
            if(resp.success){
                dispatch({type: 'setUser', payload: resp.user})
            }
        }
        return store.user;
    }

    return(
        <AuthContext.Provider value={[store, dispatch, getUser]}>
            {props.children}
        </AuthContext.Provider>
    );
}