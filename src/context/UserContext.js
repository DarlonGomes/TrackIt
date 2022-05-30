import { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const DataProvider = ({children})  => {
    const [data, setData] = useState({});
    const [token, setToken] = useState(null);
    const [firstUse, setFirstUse] = useState(null);

    if(localStorage.length === 0 && firstUse === null){
        setFirstUse(true);
    }

    if(localStorage.length !== 0 && firstUse === null){
        setFirstUse(false);
        const userAuth = JSON.parse(localStorage.getItem("data"));
        setData(userAuth);
        setToken(userAuth.token);
    }

    
    
    return(
        <UserContext.Provider value={{token, data, setData, setToken}}>
            {children}
        </UserContext.Provider>
    )
}

export default DataProvider;

let token;

/* useEffect(()=>{
    if(localStorage.length !== 0){
            const userAuth = JSON.parse(localStorage.getItem("data"));
            setToken({headers:{
                Authorization: `Bearer ${userAuth.token}`
           }}) 
            setData(userAuth);
            
     }
    },[]) */
