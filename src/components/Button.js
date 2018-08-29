// @flow

import * as React from 'react';
import styled from 'styled-components';

import { BLACK } from '../styles/colors';

type P = {
  theme?: string,
  display?: string,
  children: React.Element<*>,
};

export default class extends React.Component<P> {
  static defaultProps = {
    theme: 'orange',
    display: 'inline-block'
  };

  render() {
    const { theme, children, display } = this.props;

    return (
      <Button display={display} theme={theme}>{children}</Button>
    )
  }  
}

const BG_HASH = {
  'orange': '#FF8124',
};

const DISPLAY_HASH = {
  'block': 'block',
  'inline-block': 'inline-block',
  'flex': 'flex',
};

const Button = styled.button`
  padding: 6px 38px;
  border-radius: 5px;
  overflow: hidden;
  border: none;
  outline: none;

  background-color: ${props => BG_HASH[props.theme]};
  display: ${props => DISPLAY_HASH[props.display]};

  ${props => props.display === 'block' ? 'width: 100%' : ''}

  &:hover {
    cursor: pointer;
  }
`;
