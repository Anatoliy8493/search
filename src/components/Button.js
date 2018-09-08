// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Ink from 'react-ink';

import { hexToRgb } from '../helpers';
import { font16 } from '../styles/mixins';
import { BLACK, BLAZE_ORANGE, PUMPKIN, ECSTASY, WHITE, DODGER_BLUE } from '../styles/colors';

type P = {
  theme?: string,
  type?: string,
  onClick?: () => void,
  children: React.Node,
};

export default class extends React.PureComponent<P> {
  static defaultProps = {
    theme: 'orange',
    type: 'default',
    onClick: () => {},
  };

  render() {
    const { theme, children, type, onClick } = this.props;

    return (
      <Button onClick={onClick} type={type} theme={theme}>
        <React.Fragment>
          <Ink opacity={0.08} />
          {children}
        </React.Fragment>
      </Button>
    )
  }  
}

const THEMES = {
  'orange': css`
    background-color: ${BLAZE_ORANGE};

    &:hover {
      background-color: ${PUMPKIN};
      box-shadow: 0 1px 0 0 ${ECSTASY}, 0 1px 5px 0 ${hexToRgb(BLACK, '.25')};
    }
  `,
  'blue': css`
    background-color: ${DODGER_BLUE};
  `,
}

const TYPES = {
  'default': css``,
  'responsive': css`
    width: 100%;
  `,
}

const Button = styled.button`
  ${font16}
  position: relative;
  min-height: 40px;
  padding: 6px 38px;
  border-radius: 5px;
  overflow: hidden;
  border: none;
  outline: none;
  font-family: Helvetica, sans-serif;
  color: ${WHITE};
  transition: background-color .2s, box-shadow .2s;

  ${props => THEMES[props.theme]};
  ${props => TYPES[props.type]};

  &:hover {
    cursor: pointer;
  }
`;
