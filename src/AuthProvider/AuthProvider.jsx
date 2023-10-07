import PropTypes from 'prop-types';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const register = ( email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }



   
    const authInfo = {
        register
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;