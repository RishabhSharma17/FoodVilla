import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import DoubleHead from "./DoubleHead";
import  ResCategoary  from "./ResCategoary";

const RestaurantMenu = () =>{
    const {restId}=useParams();
    const [restInfo, setRestInfo] = useState(null);
    const [itemCards,setItemCards] = useState(null);
    const [doubleCards,setDoubleCards] = useState(null);
    const [showIndex, setShowIndex] = useState(0);

    const fetchData=async ()=>{
        const data = await fetch(MENU_URL+restId+"&catalog_qa=undefined&submitAction=ENTER");
        const j = await data.json();
        // console.log(j);
        // console.log(j?.data?.cards[2]?.card?.card?.info);
        // console.log(((j?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c => c?.card?.card?.title)).filter(c => c?.card?.card?.itemCards));
        // console.log(((j?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c => c?.card?.card?.title)).filter(c => c?.card?.card?.categories));
        setRestInfo(j?.data?.cards[2]?.card?.card?.info);
        setItemCards((j?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c => c?.card?.card?.title));
        setItemCards(((j?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c => c?.card?.card?.title)).filter(c => c?.card?.card?.itemCards));
        setDoubleCards(((j?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c => c?.card?.card?.title)).filter(c => c?.card?.card?.categories));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    if(restInfo === null  ) return <Shimmer />;

    const {name, cuisines, costForTwoMessage }=restInfo;
    
    // setItemCards(j?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    // console.log(doubleCards);
    return (itemCards === null) ? <Shimmer /> : (
        <>
        <div className="text-center">
            <h1 className="font-bold text-5xl my-4">{name}</h1>
            <h3 className="text-xl mb-3">{cuisines.join(", ")}  -  {costForTwoMessage}</h3>
        </div>
        {
            itemCards.map((rest,index)=>(
                <ResCategoary 
                key={Math.random()} 
                item={rest} 
                show={index === showIndex ? true:false} 
                setShow={()=>setShowIndex(index === showIndex ? -1 : index)}
                />
            ))
        } 
        {
            doubleCards.map((rest)=>(
                <DoubleHead key={Math.random()} item={rest} />
            ))
        }
        {/* {
        itemCards.map((rest,i) => (
            <div key={i} className="w-7/12 shadow-xl mx-auto">
                <div onClick={HandleClick} className="p-4 hover:cursor-pointer bg-gray-50 text-xl flex justify-between border-t-8 border-gray-300 border-solid">
                    <h2 className="font-bold text-2xl">{rest?.card?.card?.title}({rest?.card?.card?.itemCards.length})</h2>
                    {showIndex ? (<span>⬆️</span>) : (<span>⬇️</span>)}
                </div>
                { showIndex && <ItemCards data={rest?.card?.card?.itemCards} />}
            </div>
        ))}
        {doubleCards.map((res,i) => (
            <div className="w-7/12 mx-auto" key={i}>
                <div className="p-4 shadow-xl bg-gray-50 text-xl flex justify-between  border-t-8 border-gray-300 border-solid">
                    <h2 className="font-bold">{res?.card?.card?.title}</h2>
                </div>
            </div>
        ))} */}
        </>
    );
};

export default RestaurantMenu;
