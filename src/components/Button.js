// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Ink from 'react-ink';

import { BLACK } from '../styles/colors';
import { hexToRgb } from '../helpers';

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
    background-color: #FF6D00;

    &:hover {
      background-color: #FF8124;
      box-shadow: 0 1px 0 0 #F7661D, 0 1px 5px 0 ${hexToRgb(BLACK, '.25')};
    }
  `,
}

const TYPES = {
  'default': css``,
  'responsive': css`
    width: 100%;
  `,
}

const Button = styled.button`
  position: relative;
  padding: 6px 38px;
  border-radius: 5px;
  overflow: hidden;
  border: none;
  outline: none;
  transition: background-color .2s, box-shadow .2s;

  ${props => THEMES[props.theme]};
  ${props => TYPES[props.type]};

  &:hover {
    cursor: pointer;
  }
`;
