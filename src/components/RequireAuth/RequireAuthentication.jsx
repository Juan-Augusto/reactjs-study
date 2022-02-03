import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) => {
    const isAuth = true;
    if(!isAuth){
        return <Navigate to={'/not-authenticated'}/>;
        
    };
    return(
        children
    );
}