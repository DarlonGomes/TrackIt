import { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const DataProvider = ({children})  => {
    const [authData, setAuthData] = useState({});
        useEffect(()=>{
        const userAuth = JSON.parse(localStorage.getItem("data"));
        setAuthData(userAuth);
        },[]);
    
    return(
        <UserContext.Provider value={{authData, setAuthData}}>
            {children}
        </UserContext.Provider>
    )
}

export default DataProvider;