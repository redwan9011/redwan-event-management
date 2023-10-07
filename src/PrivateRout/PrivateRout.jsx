import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    

    if(loading) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    }
    if(user) {
        return children
    }
    return <Navigate to = "/login"></Navigate>
};

PrivateRout.propTypes = {
    children:PropTypes.object
}

export default PrivateRout;