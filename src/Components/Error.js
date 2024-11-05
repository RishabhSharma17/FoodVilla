import { useRouteError } from "react-router-dom";

export const Error = () =>{
    const err= useRouteError();
    return (
    <>
    <h1>OOPS!!! Something Went Wrong </h1>
    <h2>{err.status} : {err.statusText}</h2>
    <h2>
        Try Again Later
    </h2>
    </>
    );
};

// export default Error;