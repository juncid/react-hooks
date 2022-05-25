import { useEffect, useState } from "react";
import { myApi } from "../my-api";

function useMyApi(){
    const [data, setData] = useState([]);

    useEffect( () => {
        async function fetchData(){
            const data = await myApi.fakeFetch();
            setData(data);
        }

        fetchData();
        
    }, []);

    return data;
}

export default useMyApi;