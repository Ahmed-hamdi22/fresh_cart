import { createContext, useEffect, useState } from "react";

export let UserContext = createContext(0);

export default function UserContextProvider(props)
{
    const [Userlogin, setUserlogin] = useState(null);
    const [userData, setUserData] = useState('');

    useEffect(() => {
      if (localStorage.getItem('userToken') !== null ) {
        setUserlogin(localStorage.getItem('userToken'));
        // setUserlogin(true);
      }  
      
    }, []);
    useEffect(() => {
      if (localStorage.getItem('userToken') !== null ) {
        setUserData(localStorage.getItem('userToken'));
        // setUserlogin(true);
      }  
      
    }, []);
    return <UserContext.Provider value={{Userlogin ,setUserlogin, userData}}>
                {props.children}
    </UserContext.Provider>
}