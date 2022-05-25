import React from 'react';
import Counter from './Counter';
import ListData from './list-data';
import ListDataHook from './list-data-hook';


export const UseEffectPage = () => (
  <>
    <h2>Hook useEffect</h2>
    <Counter />
    <ListData />

    <hr />

    <h2>Ejemplo con useEffect</h2>
    <ListDataHook />
  </>
);
