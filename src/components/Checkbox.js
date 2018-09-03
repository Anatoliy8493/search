// @flow

import * as React from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';

import { Row } from '../primitives';
import { TUNDORA, DODGER_BLUE, IRON, WHITE } from '../styles/colors';
import { wh, font13, flexAlign } from '../styles/mixins';

type P = {
  label: string,
  value: string | number,
  disabled?: boolean,
  checked?: boolean,
  onClick: (value: string | number) => void,
};

export default class extends React.PureComponent<P> {
  id: string;

  constructor(props: P) {
    super(props);

    this.id = uniqueId('checkbox-');
  }

  static defaultProps = {
    checked: false,
    disabled: false,
  };

  render() {
    const { label, checked, onClick, value, disabled } = this.props;

    return (
      <Checkbox>
        <input
          id={this.id}
          value={value}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={() => onClick(value)}
        />
        <Label htmlFor={this.id}>{label}</Label>
      </Checkbox>
    );
  }
}

const Label = styled.label`
  ${font13}
  position: relative;
  margin-bottom: 0;
  padding-left: 29px;
  color: ${TUNDORA};
  cursor: pointer;

  &:before {
    ${wh('17px')}
    content: "";
    border: 1px solid ${IRON};
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    background-color: ${WHITE};
    transition: background-color .2s, border .2s;
  }

  &:hover {
    &:before {
      border-color: ${DODGER_BLUE};
    }
  }
`;

const Checkbox = styled(Row)`
  ${flexAlign('flex-start', 'center')}
  position: relative;
  height: 21px;

  & input[type="checkbox"] {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }

  & input[type="checkbox"]:checked + label:before {
    content: "";
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDciPgogIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjM0U5Q0U4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEuNSAzLjVsMiAyIDQtNCIvPgo8L3N2Zz4K');
    background-size: 12px 8px;
    background-position: center center;
    background-repeat: no-repeat;
    border: 1px solid ${DODGER_BLUE};
  }
`;
