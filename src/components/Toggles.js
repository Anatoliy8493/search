// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { Row } from './../primitives';
import { font12 } from '../styles/mixins';
import { WHITE, DODGER_BLUE, IRON, TWILIGHT_BLUE } from '../styles/colors';

import type { Option } from '../model';

type P = {
  options: Array<Option>,
  onClick: (value: number | string) => void,
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
  border: 1px solid ${DODGER_BLUE};
  background-color: ${DODGER_BLUE};
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
  border: 1px solid ${IRON};
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: ${DODGER_BLUE};

  &:hover {
    z-index: 2;
    border: 1px solid ${DODGER_BLUE};
    background-color: ${TWILIGHT_BLUE};
    cursor: pointer;
  }

  ${props => props.isFitrst && 'border-radius: 4px 0 0 4px;'}
  ${props => props.isLast && 'border-radius: 0 4px 4px 0;'}
  ${props => props.isActive && activeCss}
`;
