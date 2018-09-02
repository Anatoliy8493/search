// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { Row } from './../primitives';
import { WHITE } from '../styles/colors';
import { font12 } from '../styles/mixins';

import type { Option } from '../model';

type P = {
  options: Array<Option>,
  onClick: (value: string) => void,
};

export default class Toggles extends React.PureComponent<P> {
  render() {
    const { options, onClick } = this.props;

    return (
      <Container>
        {options.map((o, id) => {
          return (
            <Toggle
              key={o.value}
              isFitrst={id === 0}
              isActive={o.isActive}
              isLast={id === options.length - 1}
              onClick={() => onClick(o.value)}
            >
              {o.label}
            </Toggle>
          );
        })}
      </Container>
    );
  }  
}

const activeBaseCss = css`
  z-index: 1;
  border: 1px solid #2196f3;
  background-color: #2196F3;
  color: ${WHITE};
`;

const activeCss = css`
  ${activeBaseCss}

  &:hover {
    ${activeBaseCss}
  }
`;

const Container = styled(Row)`
  width: 100%;
  margin-left: 1px;
`;

const Toggle = styled.div`
  ${font12}
  margin-left: -1px;
  padding: 9px 21px;
  border: 1px solid #D2D5D6;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #2196F3;

  &:hover {
    z-index: 2;
    border: 1px solid #2196f3;
    background-color: #F2FCFF;
    cursor: pointer;
  }

  ${props => props.isFitrst && 'border-radius: 4px 0 0 4px;'}
  ${props => props.isLast && 'border-radius: 0 4px 4px 0;'}
  ${props => props.isActive && activeCss}
`;
