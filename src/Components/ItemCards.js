import { useDispatch } from "react-redux";
import { ITEMS_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { addItems } from "../utils/cartSlice";



export const ItemCards = (prop)=>{
    const {data}=prop;
    const dispatch = useDispatch(data);
    function handleAdd(data){
        dispatch(addItems(data));
    }
    // const handleAdd= ()=> {
    //     dispatch(addItems("Pizza"));
    // }
    return (data === null )? <Shimmer/> : (
        <>
        {data.map((data)=>(
                <div className="p-4 flex justify-between border-b-4 border-solid border-gray-200" key={data?.card?.info?.id}>
                    <div>
                        <div className="text-xl ">{data?.card?.info.name}</div>
                        <div>₹ {data?.card?.info?.price/100 ? data?.card?.info?.price/100 : data?.card?.info?.defaultPrice/100}</div>
                        <div className="my-2">{data?.card?.info?.description}</div>
                    </div>
                    <div  className="relative hover:cursor-pointer">
                        <img className="w-48 h-40 object-cover rounded-2xl" src={ITEMS_URL+data?.card?.info?.imageId} />
                        <button onClick={()=>handleAdd(data)} className="w-5/6 text-center absolute top-32 left-4  text-2xl  bg-gray-100 text-green-400 font-bold rounded-xl p-1 hover:bg-gray-200 ">ADD</button>
                    </div>
                </div> 
        ))}
        </>
    );
};

export default ItemCards;