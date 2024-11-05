import RestrauntCard from "./RestaurantCard";
import {useState, useEffect,} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus";


const Body = () => {
    const [listofRestaurants,setListofRestaurants] = useState([]);
    const [filteredList,setfilteredList]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const j = await data.json();

        // console.log(j.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // console.log(j.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[3].info.id);

        setListofRestaurants(j?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(j?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setIsLoading(false);
    } 
    
    useEffect(()=>{
        fetchdata();
    }, []);
    const [search,setsearch]=useState("");
    const onlinestatus = useOnlineStatus();
        if(onlinestatus == false){
            return (<h1>Looks Like You are Offline!! please check your internet connection.</h1>);
        }
    
    
    return isLoading ? (<Shimmer />):(
    <div className="m-4 p-5 bg-green-50">
        <div className="flex space-x-4">
            <div className="w-11/12 h-14 bg-white border-solid border-2 border-black rounded-xl " >
                <input className="h-full focus:outline-none bg-white p-5 w-11/12 rounded-xl" type="text" placeholder="Search" value={search}
                onChange={(e)=>{setsearch(e.target.value)}}
                />
                <button className="w-1/12   h-8 rounded-xl  bg-white" onClick={()=>{
                const filtered=listofRestaurants.filter(
                    (res) => res?.info?.name.toLowerCase().includes(search.toLowerCase())
                );
                setfilteredList(filtered);
                }}>
                Search
                </button>
            </div>
            <button className="h-14 w-28 bg-white border-black border-2 border-solid rounded-xl" onClick={()=>{
                const filtered=listofRestaurants.filter(
                    (rest)=>rest.info.avgRating >= 4.5
                );
                setfilteredList(filtered);
            }}>
            Top Rated 
            </button>
        </div>
        <div className="flex flex-wrap">

            {/* Bad practice
            As it can't be done if there were more cards.
            */}
            {/* <RestrauntCard dataitems={restaurantList[0]}/>
            <RestrauntCard dataitems={restaurantList[1]}/>
            <RestrauntCard dataitems={restaurantList[2]}/>
            <RestrauntCard dataitems={restaurantList[3]}/>
            <RestrauntCard dataitems={restaurantList[4]}/>
            <RestrauntCard dataitems={restaurantList[5]}/>
            <RestrauntCard dataitems={restaurantList[0]}/>
            <RestrauntCard dataitems={restaurantList[1]}/>
            <RestrauntCard dataitems={restaurantList[2]}/>
            <RestrauntCard dataitems={restaurantList[3]}/>
            <RestrauntCard dataitems={restaurantList[4]}/>
            <RestrauntCard dataitems={restaurantList[5]}/>
            
            <RestrauntCard dataitems={restaurantList[3]}/>
            <RestrauntCard dataitems={restaurantList[4]}/> */}


            {/* Good practice */}
            {/*Always write key for the functional components */}
            {
                filteredList.map((rest)=>(
                    <Link key= {rest?.info?.id}  to={"/restaurant/"+rest?.info?.id}><RestrauntCard  dataitems={rest}/></Link>
                ))
            }
        </div>
    </div>
    );
}; 

export default Body;