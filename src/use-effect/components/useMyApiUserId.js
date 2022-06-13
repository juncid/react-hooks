import { useEffect, useState } from "react";
import { myApi } from "../my-api";

function useMyApiUserId({userId}){
    const [data, setData] = useState([]);

    useEffect( () => {
        async function fetchDataID(){
            const data = await myApi.fakeFetchId(userId);
            setData(data);
        }

        fetchDataID();
        
    }, [userId]);

    return data;
}

export default useMyApiUserId;