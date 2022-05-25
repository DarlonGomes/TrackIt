import { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const DataProvider = ({children})  => {
    const [data, setData] = useState({});
    useEffect(()=>{
        if(localStorage.length !== 0){
                    const userAuth = JSON.parse(localStorage.getItem("data"));
                    setData(userAuth);
            }
    },[])
      
    
       
    
    return(
        <UserContext.Provider value={{data, setData}}>
            {children}
        </UserContext.Provider>
    )
}

export default DataProvider;