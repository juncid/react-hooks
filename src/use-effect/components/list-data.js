import React, { Component } from 'react';

import { myApi } from '../my-api';
import ListComponent from './listComponent';
import { getRandomInt } from './utils';



export class listData extends Component {
  state  = {
      data: [],
      userId: 1,
  }

  
  async componentDidMount() {
    const {userId} = this.state;
    const data = await myApi.fakeFetchId(userId);
    this.setState({
      data,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    const {userId} = this.state;

    if (prevState.userId !== userId) {
      const data = await myApi.fakeFetchId(userId);
      this.setState({
        data,
      });
    }
  }

  handleUserId = () => {
    const randomId = getRandomInt(1, 5);
    this.setState({
      userId: randomId
    });
  }


  render() {
    const {data, userId} = this.state;
    return (
      <>
        <h3>User ID: {userId}</h3>
        <ListComponent dataList={data} />
        <button onClick={this.handleUserId}>Update user id</button>
      </>
    );
   
  }
}

export default listData;