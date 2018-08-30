// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { WHITE, BLACK } from './../styles/colors';
import { blink } from './../styles/keyFrames';
import { Div, Column, Row } from './../primitives';
import { hexToRgb, getNoun, formatDate } from './../helpers';
import { wh, font32, font16, flexAlign, font10, font12 } from './../styles/mixins';

type P = {
  count: number,
};

export default class extends React.Component<P> {
  render() {
    return [...Array(this.props.count).keys()].map(s => (
      <Skeleton>
        <SkeletonLeft>
          <SkeletonLogo />
          <SkeletonButton />
        </SkeletonLeft>
        <SkeletonRigth>
          <SkeletonRow />
          <SkeletonRow />
        </SkeletonRigth>
      </Skeleton>
    ))
  }
}

const animationCss = css`
  animation: ${blink} ease-in-out 1s infinite;
  opacity: 0.3;
`;

const Skeleton = styled(Row)`
  ${wh('565px', '161px')}
  margin-bottom: 20px;
  box-shadow: 0 1px 4px #5B89A4;
  border-radius: 5px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkeletonLeft = styled(Div)`
  ${wh('200px', '100%')}
  flex-shrink: 0;
  padding: 25px 20px;
  box-shadow: 1px 0 1px ${hexToRgb(BLACK, '.08')};
`;

const SkeletonRigth = styled(Div)`
  ${wh('365px', '100%')}
  padding: 25px 20px;
`;

const SkeletonLogo = styled(Div)`
  ${animationCss}
  ${wh('120px', '35px')}
  margin: 0 auto 20px;
  background-color: #cccccc;
`;

const SkeletonButton = styled(Div)`
  ${animationCss}
  ${wh('100%', '56px')}
  background-color: #cccccc;
`;

const SkeletonRow = styled(Div)`
  ${animationCss}
  ${wh('100%', '15px')}
  background-color: #cccccc;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;
