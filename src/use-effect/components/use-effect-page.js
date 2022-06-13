import React from 'react';
import Counter from './Counter';
import EnterKey from './enter-key';
import EnterKeyHooks from './enter-key-hooks';
import ListData from './list-data';
import ListDataHook from './list-data-hook';
import ListDataHookUserId from "./list-data-hook-user-id";


export const UseEffectPage = () => (
  <>
    <h2>Hook useEffect</h2>
    <Counter />
    <ListData />
    <EnterKey />

    <hr />

    <h2>Ejemplo con useEffect</h2>
    <ListDataHook />
    <hr />

    <ListDataHookUserId />
    <br />
    <br />
    <EnterKeyHooks />

    

  </>
);
