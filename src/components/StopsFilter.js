// @flow

import * as React from 'react';
import styled from 'styled-components';

export default class StopsFilter extends React.Component<{}> {
  render() {
    console.log(this.props)

    return (
      <Button>StopsFilter</Button>
    )
  }  
}

const Button = styled.button`
  padding: 6px 38px;
`;
