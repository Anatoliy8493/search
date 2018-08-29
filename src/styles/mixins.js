import { css } from 'styled-components';

import { TRANSITION_DURATION, PHONE_MIN_WIDTH, TABLET_MIN_WIDTH, DESKTOP_MIN_WIDTH } from './constants';

const SIZES = {
  phone: PHONE_MIN_WIDTH,
  tablet: TABLET_MIN_WIDTH,
  desktop: DESKTOP_MIN_WIDTH,
};

export const Media = Object.entries(SIZES).reduce(
  (obj, [label, size]) => ({
    ...obj,
    [label]: (...args) => css`
      @media only screen and (min-width: ${SIZES}px) {
        ${css(...args)};
      }
    `,
  }),
  {}
);

export const column = css`
  display: flex;
  flex-direction: column;
`;

export const row = css`
  display: flex;
  flex-direction: row;
`;

// naming https://docs.emmet.io/cheat-sheet/
export const font = ({ fs, fv, fw, fz, lh, ff }) => css`
  font-style: ${fs};
  font-variant: ${fv};
  font-weight: ${fw};
  font-size: ${fz};
  line-height: ${lh};
  font-family: ${ff};
`;

export const flexAlign = (mainAxis, crossAxis) => css`
  justify-content: ${mainAxis};
  align-items: ${crossAxis};
`;

export const wh = (width, height) => css`
  width: ${width};
  height: ${height || width};
`;

export const rounded = css`
  border-radius: 50%;
  overflow: hidden;
`;

export const container = css`
  width: 100%;
  max-width: 1376px;
  padding-right: 16px;
  padding-left: 16px;
  margin: 0 auto;
  
  ${Media.desktop`
    padding-left: 32px;
    padding-right: 32px;
  `};
`;

export const font32 = () => css`
  ${font({ fz: '32px', lh: '26px', fw: 400 })}
`;

export const transition = (prop = 'all', duration = TRANSITION_DURATION, timingFunc, delay) => css`
  transition: ${prop} ${duration} ${timingFunc} ${delay};
`;
