// @flow

import * as React from 'react';
import styled from 'styled-components';

import Toggles from './Toggles';

import type { Option } from '../model';

type P = {
  onClick: (value: string) => void,
  options: Array<Option>,
};

export default class CurrencyFilter extends React.Component<P> {
  render() {
    const { onClick, options } = this.props;

    return (
      <Container>
        <Toggles options={options} onClick={onClick} />
      </Container>
    )
  }  
}

const Container = styled.div`
  width: 100%;
`;
