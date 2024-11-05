import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [status, setStatus] = useState(navigator.onLine);

    const handle=()=>{
      setStatus(navigator.onLine);
    }

    useEffect(() => {
     window.addEventListener('online',handle);
     window.addEventListener('offline',handle);
    }, []);
    
    return status;
}
