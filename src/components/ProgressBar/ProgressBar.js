/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES_STYLE = {
  small: {
    '--height': '8px',
    '--padding': '0',
    '--outer-radius': '4px',
  },
  medium: {
    '--height': '12px',
    '--padding': '0',
    '--outer-radius': '4px',
  },
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--outer-radius': '8px',
  }
}

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={SIZES_STYLE[size]}
    >
      <VisuallyHidden>{value} %</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--outer-radius);
  display: block;
  height: var(--height);
  padding: var(--padding);
  position: relative;

  &::before {
    background: ${COLORS.primary};
    border-radius: ${(props) => props['aria-valuenow'] > 99 ? '4px' : '4px 0 0 4px'};
    content: '';
    display: block;
    inset: var(--padding);
    inset-inline-end: auto;
    position: absolute;
    width: ${(props) => `${props['aria-valuenow']}%`};
  }
`

export default ProgressBar;
