import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dummy user",
        email:"dummy@gmail.com",
    },
});

export default UserContext;