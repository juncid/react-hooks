import React, { Component } from 'react';
import {handleKeyDown} from './utils';

export class EnterKey extends Component {

    componentDidMount() {
        window.addEventListener('keydown', handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', handleKeyDown);
    }

  render() {
    return(
        <>
        <br />
        <p>Presiona Enter :)</p>
        </>
    );
    
  }
}

export default EnterKey;