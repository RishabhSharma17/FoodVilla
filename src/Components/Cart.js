import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

export default Cart=()=>{
    const cartItems = useSelector((store)=>store.cart.item);
    const dispatch = useDispatch();
    const handleClear = ()=>{
        dispatch(clearCart());
    }
    return <>
        <div className="w-1/2 mx-auto my-5 ">
            <h1>Cart</h1><button onClick={handleClear}>Clear Cart</button>
            {cartItems.length===0 && <h1>Your Cart is Empty.</h1>}
            <ItemCards data={cartItems}/>
        </div>
        
    </>
}
