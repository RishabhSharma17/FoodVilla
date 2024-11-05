import ItemCards from "./ItemCards";

const DoubleHeadCards = ({data,show, setShow}) =>{
    const HandleClick = () =>{
        setShow();
    }
    return (
        <>
        <div className=" shadow-xl mx-auto">
            <div onClick={HandleClick} className="p-4 hover:cursor-pointer bg-gray-50 text-xl flex justify-between border-t-2 border-gray-400 border-solid">
                <h2 className="font-bold text-2xl">{data?.title}({data?.itemCards.length})</h2>
                {show ? (<span>⬆️</span>) : (<span>⬇️</span>)}
            </div>
            { show && <ItemCards key={data?.itemCards?.card?.info?.id} data={data?.itemCards} />}
        </div>
       </>
    )
}

export default DoubleHeadCards;