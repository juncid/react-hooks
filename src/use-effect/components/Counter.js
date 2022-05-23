import React, {useState, useEffect} from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);
  
  const handleClick = () => setCount(count + 1) ;

  useEffect(() => {
    console.log('valor de count: ', count);
  
  }, [count]);
  

  return (
    <>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}> Clickeame</button>
    </>
  );
};

export default Counter;