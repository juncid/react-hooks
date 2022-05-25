import React, { Component } from 'react';

import { myApi } from '../my-api';

export class listData extends Component {
 
  state  = {
      data: [],
      // userId: 1,
  }

  async componentDidMount() {
      const data = await myApi.fakeFetch();
      this.setState({data});
  }


  render() {
    const {data} = this.state;
    return data.map(({label}) => <p key={label}>{label}</p>);
  }
}

export default listData;