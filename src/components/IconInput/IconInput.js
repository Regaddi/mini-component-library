import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ICON_SIZE = {
  small: 16,
  large: 20,
};

const ICON_STROKE = {
  small: 1,
  large: 2,
};

const SIZES_STYLE = {
  small: {
    "--border-width": "1px",
    "--icon-size": `${ICON_SIZE.small}px`,
    "--padding": "4px",
  },
  large: {
    "--border-width": "2px",
    "--icon-size": `${ICON_SIZE.large}px`,
    "--padding": "8px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Label>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={size}>
        <Icon
          aria-hidden
          id={icon}
          size={ICON_SIZE[size]}
          strokeWidth={ICON_STROKE[size]}
        />
      </IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={SIZES_STYLE[size]}
        width={width}
      />
    </Label>
  );
};

const Label = styled.label`
  color: ${COLORS.gray700};
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  border: none;
  box-shadow: inset 0px calc(-1 * var(--border-width)) 0px 0px currentColor;
  color: inherit;
  font-weight: 700;
  padding: var(--padding);
  padding-inline-start: calc(var(--padding) + var(--icon-size));
  width: ${(props) => props.width}px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  inset-block-start: ${(props) => props.size === 'small' ? '2px' : '0'};
  inset-inline-start: 0;
  position: absolute;
`;

export default IconInput;
