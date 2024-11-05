
const Shimmer = () =>{
    return (
        <>
        
        <div className="m-6 flex flex-wrap" >
            <div className="w-full  h-14 bg-green-50 m-6">
            </div>
            {Array(30).
            fill("").
            map((e,index)=>(<div className="w-64 h-96 rounded-2xl bg-green-50 p-2 m-4 " key={index}></div>))}
        </div>
        </>
    );
};

export default Shimmer;