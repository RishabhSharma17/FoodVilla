import ItemCards  from "./ItemCards";

const ResCategoary = ({item,show,setShow}) =>{
    const HandleClick = () =>{
        setShow();
    };
    return (
       <>
        <div className="w-7/12 shadow-xl mx-auto">
            <div onClick={HandleClick} className="p-4 hover:cursor-pointer bg-gray-50 text-xl flex justify-between border-t-8 border-gray-300 border-solid">
                <h2 className="font-bold text-2xl">{item?.card?.card?.title}({item?.card?.card?.itemCards.length})</h2>
                {show ? (<span>⬆️</span>) : (<span>⬇️</span>)}
            </div>
            { show && <ItemCards data={item?.card?.card?.itemCards} />}
        </div>
       </>
    )
};

export default ResCategoary;