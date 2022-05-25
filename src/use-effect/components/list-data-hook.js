
import React from 'react';
import useMyApi from './useMyApi';

function ListDataHook() {

  const data = useMyApi();

  return (
      <>
      {data.map(({label}) => <p key={label}>{label}</p>)}
      </>
  );
}

export default ListDataHook;