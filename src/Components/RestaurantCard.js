import React, { useContext } from "react";
import {CDN_URL} from "../utils/constant";
import UserContext from "../utils/UserContext";
/*
we are using here the concept of CONFIG DRIVEN UI.
it is widely used in companies to fetch data from backend ,
to make the app dynamic.
*/

const RestrauntCard = (props) => {
    const { dataitems } = props;
    const {user} = useContext(UserContext);
    const { 
        name,
        cuisines,
        avgRating,
        areaName,
        cloudinaryImageId,
        locality,
     } = dataitems?.info;//known as optional chaining.
    return (
        <div className="w-64 overflow-hidden  rounded-2xl border-solid border-black border-2 p-2 m-4" style={{backgroundColor:"#f0f0f0"}}>
            <img
                className="h-1/2 w-full rounded-2xl"
                alt="res-logo"
             src={CDN_URL+cloudinaryImageId}
            />
             <h2 className="font-bold text-2xl text-center">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4> area :{areaName}, {locality}</h4>
            <h4>User:{user.name}</h4>
            <h4>mail id:{user.email}</h4> 
        </div>
    );
};

export default RestrauntCard;