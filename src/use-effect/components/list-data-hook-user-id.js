import React, {useState, useEffect } from 'react';
import ListComponent from './listComponent';
import { myApi } from "../my-api";
import { getRandomInt} from './utils';


const ListDataHookUserId = () => {

    const [userId, setUserId] = useState(1);
    const [data, setData] = useState([]);  

    const handleUserId = () => {
      const randomId = getRandomInt(1, 5);
      setUserId(randomId);
    };

   
    useEffect( () => {
        async function fetchDataID(){
            const data = await myApi.fakeFetchId(userId);
            setData(data);
        }

        fetchDataID();
        
    }, [userId]);

  return (
    <>
        <h2>Ejemplo con useEffect Update User Id</h2>
        <h3>User ID: {userId}</h3>
        <ListComponent dataList={data} />
        <button onClick={handleUserId}>Update user id</button>
      </>
  );
};

export default ListDataHookUserId;