// @flow

import * as React from 'react';
import styled from 'styled-components';

import { Row } from '../primitives';
import { font11, flexAlign, font12 } from '../styles/mixins';

import Checkbox from './Checkbox';

type P = {};

type S = {
  hovered: boolean,
};

export default class StopsFilter extends React.PureComponent<P, S> {
  render() {
    const { onClick, options, type } = this.props;

    return (
      <Container>
        <Title>Количество пересадок</Title>
        {options.map(o => (
          <FilterRow key={o.value}>
            <Checkbox value={o.value} label={o.label} checked={o.isActive} onClick={value => onClick(type, value)} />
            {o.value !== 'all' && <Only onClick={() => onClick(type, o.value, true)}>только</Only>}
          </FilterRow>
        ))}
      </Container>
    )
  }  
}

const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;

const Only = styled.button`
  ${font11}
  border: none;
  outline: none;
  background: none;
  color: #2196F3;
  text-transform: uppercase;
  transition: opacity .2s;
  opacity: 0;

  &:hover {
    cursor: pointer;
  }
`;

const FilterRow = styled(Row)`
  ${flexAlign('space-between', 'center')}
  padding: 5px 15px;
  transform: background-color .2s;

  &:hover {
    background-color: #F1FCFF;

    ${Only} {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  ${font12}
  margin-bottom: 10px;
  padding: 15px 15px 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #4A4A4A;
`;
