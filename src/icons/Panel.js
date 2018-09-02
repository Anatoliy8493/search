// @flow

import * as React from 'react';

import { BLACK } from '../styles/colors';

type P = {
  w?: number,
  h?: number,
  fill?: string,
};

export default class PanelIcon extends React.PureComponent<P> {
  static defaultProps = {
    w: 18,
    h: 20,
    fill: BLACK,
  }

  render() {
    const { w, h, fill } = this.props;

    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 18 20">
        <g fill={fill}>
          <path d="M0,16.0366972 L0,18.327654 L6,18.327654 L6,16.0366972 L0,16.0366972 L0,16.0366972 Z M0,2.29095675 L0,4.5819135 L10,4.5819135 L10,2.29095675 L0,2.29095675 L0,2.29095675 Z M10,20.6186107 L10,18.327654 L18,18.327654 L18,16.0366972 L10,16.0366972 L10,13.7457405 L8,13.7457405 L8,20.6186107 L10,20.6186107 L10,20.6186107 Z M4,6.87287025 L4,9.163827 L0,9.163827 L0,11.4547837 L4,11.4547837 L4,13.7457405 L6,13.7457405 L6,6.87287025 L4,6.87287025 L4,6.87287025 Z M18,11.4547837 L18,9.163827 L8,9.163827 L8,11.4547837 L18,11.4547837 L18,11.4547837 Z M12,6.87287025 L14,6.87287025 L14,4.5819135 L18,4.5819135 L18,2.29095675 L14,2.29095675 L14,0 L12,0 L12,6.87287025 L12,6.87287025 Z" />
        </g>
      </svg>
    );
  }
}
