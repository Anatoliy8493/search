import { css } from 'styled-components';

import { PHONE_MIN_WIDTH, TABLET_MIN_WIDTH, DESKTOP_MIN_WIDTH } from './constants';

const SIZES = {
  phone: PHONE_MIN_WIDTH,
  tablet: TABLET_MIN_WIDTH,
  desktop: DESKTOP_MIN_WIDTH,
};

export const Media = Object.entries(SIZES).reduce(
  (obj, [label]) => ({
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
  max-width: 818px;
  margin: 0 auto;
`;

export const font32 = () => css`
  ${font({ fz: '32px', lh: '26px', fw: 400 })}
`;

export const font16 = () => css`
  ${font({ fz: '16px', lh: '22px', fw: 400 })}
`;

export const font12 = () => css`
  ${font({ fz: '12px', lh: '18px', fw: 400 })}
`;

export const font10 = () => css`
  ${font({ fz: '10px', lh: '12px', fw: 400 })}
`;
