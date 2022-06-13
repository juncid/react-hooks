import React, {useEffect} from 'react';
import {handleKeyDown} from './utils';


const EnterKeyHooks = () => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    },[]);

  return (
    <><p>Presiona Enter :)</p></>
  );
};

export default EnterKeyHooks;