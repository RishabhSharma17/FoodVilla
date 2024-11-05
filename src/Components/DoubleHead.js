import { useState } from "react";
import DoubleHeadCards from "./DoubleHeadCards";


const DoubleHead = (props) =>{
    const {item} = props;
    const {categories} = item?.card?.card;
    const [showIndex, setShowIndex] = useState(0);
    return (
        <>
        <div className="w-7/12 shadow-xl mx-auto">
            <div className="p-4 hover:cursor-pointer bg-gray-50 text-xl flex justify-between border-t-8 border-gray-300 border-solid">
                <h2 className="font-bold text-2xl">{item?.card?.card?.title}</h2>
            </div>
            {
             categories.map((rest,i)=>(
                <DoubleHeadCards 
                key={i} 
                data={rest}
                show={i===showIndex ? true:false}
                setShow={()=>setShowIndex(i)} 
                />
             ))   
            }
        </div>
        </>
    )
}

export default DoubleHead;