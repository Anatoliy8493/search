// @flow

import * as React from 'react';
import styled from 'styled-components';

export default class CurrencyFilter extends React.Component<{}> {
  render() {
    console.log(this.props)

    return (
      <Button>CurrencyFilter</Button>
    )
  }  
}

const Button = styled.button`
  padding: 6px 38px;
`;
