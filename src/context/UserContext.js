import { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const DataProvider = ({children})  => {
    const [data, setData] = useState({});
    const [token, setToken] = useState(null)
    useEffect(()=>{
        if(localStorage.length !== 0){
                    const userAuth = JSON.parse(localStorage.getItem("data"));
                    setData(userAuth);
                    setToken({headers:{
                        Authorization: `Bearer ${userAuth.token}`
                        }})
                    
            }
    },[])
      
    
       
    
    return(
        <UserContext.Provider value={{token, data, setData}}>
            {children}
        </UserContext.Provider>
    )
}

export default DataProvider;