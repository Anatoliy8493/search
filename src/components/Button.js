// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { BLACK } from '../styles/colors';
import { hexToRgb } from '../helpers';

type P = {
  theme?: string,
  display?: string,
  children: React.Element<*>,
  onClick: () => void,
};

export default class extends React.PureComponent<P> {
  static defaultProps = {
    theme: 'orange',
    display: 'inline-block'
  };

  render() {
    const { theme, children, display, onClick } = this.props;

    return (
      <Button onClick={onClick} display={display} theme={theme}>{children}</Button>
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

const Button = styled.button`
  padding: 6px 38px;
  border-radius: 5px;
  overflow: hidden;
  border: none;
  outline: none;
  transition: background-color .2s, box-shadow .2s;

  ${props => `display: ${props.display}`};
  ${props => props.display === 'block' && 'width: 100%'}
  ${props => THEMES[props.theme]};

  &:hover {
    cursor: pointer;
  }
`;
