// @flow

import * as React from 'react';

import { IRON } from '../styles/colors';

type P = {
  w?: number,
  h?: number,
};

export default class PlaneIcon extends React.PureComponent<P> {
  static defaultProps = {
    w: 13,
    h: 13,
  }

  render() {
    const { w, h } = this.props;

    return (
      <svg width={w} height={h} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9 13h1.3l3.25-5.474h3.575c.54 0 .975-.458.975-1.026 0-.568-.436-1.026-.975-1.026H8.45L5.2 0H3.9l1.625 5.474H1.95L.975 4.105H0L.65 6.5 0 8.895h.975l.975-1.369h3.575L3.9 13z" fill={IRON} fillRule="nonzero" />
      </svg>
    );
  }
}
