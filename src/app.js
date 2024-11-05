import React, {lazy, Suspense, useState, useContext} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Cart from "./Components/Cart";
import {Contact}  from "./Components/Contact";  
import {Error} from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(()=> import("./Components/Grocery"));

const AppLayout=()=>{
    const [user,setUser] = useState({
        name:"Rishabh Sharma",
        email:"rishabh@gmail.com",
    });
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{user:user,setUser:setUser}}>
                <div className="">
                    <UserContext.Provider value={{user:{name:"Aksh Sharma"}}}>
                        <Header />
                    </UserContext.Provider>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

const Approuter = createBrowserRouter([
    //this will load the whole other page but if we want to make header intact we use another way
    // {
    //     path:"/",
    //     element:<AppLayout />,
    //     errorElement:<Error />,
    // },
    // {
    //     path:"/about",
    //     element:<About />,
    // },
    // {
    //     path:"/contact",
    //     element:<Contact />,
    // }

    {
        path:"/",
        element:<AppLayout />, 
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurant/:restId",
                element:<RestaurantMenu />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path:"/cart",
                element:<Cart />,
            }
        ],

    }
]);
  

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Approuter}/>);