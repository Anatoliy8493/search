// @flow

import * as React from 'react';
import styled from 'styled-components';

import Toggles from './Toggles';
import { font12 } from '../styles/mixins';

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
        <Title>Валюта</Title>
        <Toggles options={options} onClick={onClick} />
      </Container>
    )
  }  
}

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

const Title = styled.div`
  ${font12}
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #4A4A4A;
`;
