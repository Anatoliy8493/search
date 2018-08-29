// @flow

import * as React from 'react';

import { transition, wh } from './../styles/mixins';
import { BLACK } from './../styles/colors';
import { hexToRgb } from './../helpers';
import { Div } from './../primitives';

export default class Ticket extends React.Component {
  render() {
    const { origin_name: originName, price } = this.props;

    return (
      <Container>
        <Left>
          <Price>{price}</Price>
        </Left>
        <Rigth></Rigth>
      </Container>
    )
  }  
}

const Container = Div.extend`
  ${transition('box-shadow')}
  height: 200px;
  box-shadow: 0 2px 4px ${BLACK};

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 16px ${BLACK};
  }
`;

const Left = Div.extend`
  ${wh('40%', '100%')}
  border-right: 1px solid ${hexToRgb(BLACK, '.08')}
`;

const Rigth = Div.extend`
  ${wh('60%', '100%')}
`;

const Price = Div.extend``
