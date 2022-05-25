import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const DataProvider = ({children})  => {
    const [data, setData] = useState({});
        useEffect(()=>{
        const userAuth = JSON.parse(localStorage.getItem("data"));
        setData(userAuth);
        },[]);
    
    return(
        <UserContext.Provider value={{data, setData}}>
            {children}
        </UserContext.Provider>
    )
}

export default DataProvider;