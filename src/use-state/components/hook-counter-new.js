import React from 'react';


const HookCounterNew = () => {

  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count +1 );

  return (
    <>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Clickeame HookNew</button>
    </>
  );
};

export default HookCounterNew;

