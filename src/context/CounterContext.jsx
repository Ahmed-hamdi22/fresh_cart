import { createContext, useState } from "react";

export let ConterContext = createContext(0);

export default function ConterContextProvider(props)
{
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('');

    function changeCount() {
        setCount(Math.random)
    }
    return <ConterContext.Provider value={{count , userName ,changeCount}}>
                {props.children}
    </ConterContext.Provider>
}