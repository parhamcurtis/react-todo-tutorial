import React, {createContext} from 'react';

export const AuthContext = createContext();

export function AuthStore(props) {
    return(
        <AuthContext.Provider value={{userId:123}}>
            {props.children}
        </AuthContext.Provider>
    );
}