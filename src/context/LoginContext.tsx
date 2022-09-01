import React, {
    createContext,
    SetStateAction,
    useContext,
    useState,
} from "react";

import {LoginType} from "../type/TypeLogin";

const UserContext = createContext <
    [LoginType, React.Dispatch<SetStateAction<LoginType>>] | null
> (null);

//
const useUser = () => {
    const [dataUser, setDataUser] = useContext(UserContext) as any;
    return {dataUser, setDataUser};
}

//
const UserProvider = ({children}:{children:any}) => {
    const authUser = useState<LoginType>({
        email: children.email,
        password: children.password,
    });

    return(
        <UserContext.Provider value={authUser}>{children}</UserContext.Provider>
    );
};

export {UserProvider, useUser};