import { createContext, useEffect, useState } from "react";

export let UserContext = createContext(0);

export default function UserContextProvider(props)
{
    const [Userlogin, setUserlogin] = useState(null);
    const [userName, setUserName] = useState('');

    useEffect(() => {
      if (localStorage.getItem('userToken') !== null ) {
        // setUserlogin(localStorage.getItem('userToken'));
        setUserlogin(true);
      }  
      
    }, []);
    return <UserContext.Provider value={{Userlogin ,setUserlogin}}>
                {props.children}
    </UserContext.Provider>
}