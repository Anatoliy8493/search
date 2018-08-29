// @flow

import * as React from 'react';

import { Div } from '../primitives';
import { BLACK } from '../styles/colors';

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <div>SideBar</div>
      </Container>
    )
  }  
}

const Container = Div.extend`
  flex-shrink: 0;
  width: 232px;
  box-shadow: 0 2px 4px ${BLACK};
`;
