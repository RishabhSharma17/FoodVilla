import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import {useState, useContext} from "react";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Header = () => {
    const [Log,setLog] = useState("LogIn");
    const status = useOnlineStatus();
    const loginUser = useContext(UserContext);
    const cartitems = useSelector((store)=>store.cart.item);
    console.log(cartitems);
    return (
        <>
        <div className=" rounded-md flex flex-wrap bg-green-50 justify-between ">
            <div className="h-32">
                <a href="/">
                <img className="h-full p-2 rounded-2xl" alt="Logo" src={LOGO_URL} />
                </a>
            </div>
            <div className="">
                <ul className=" flex flex-wrap py-10 mx-6">
                    <li className="px-4 text-2xl">Online Status:{status ==true ? "✅":"🔴"}</li>
                    <li  className="px-4 text-2xl"><Link to="/">Home</Link></li>
                    <li  className="px-4 text-2xl"><Link to="/about">about</Link></li>
                    <li  className="px-4 text-2xl"><Link to="/contact">Contact us</Link></li>
                    <li  className="px-4 text-2xl"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 text-4xl flex flex-row"><Link to="/Cart">🛒{cartitems==0 ? <></> : <div className="text-2xl">({cartitems.length} items)</div>}</Link></li>
                    <li className="px-4 text-2xl">{loginUser.user.name}</li>
                    <li><button className="text-2xl border-solid border-2 border-black bg-white rounded-xl" onClick={()=>{
                        const logged = Log == "LogIn" ? "LogOut":"LogIn";
                        setLog(logged);
                    }}>{Log}</button></li>
                </ul>
            </div>
        </div>
        </>
    );
};

//Its a default export
// export default Header;