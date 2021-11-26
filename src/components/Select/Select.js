import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <span aria-hidden>{displayedValue}</span>
      <Icon aria-hidden id="chevron-down" size={24} strokeWidth={2} />
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  display: inline-flex;
  flex-direction: row;
  gap: 20px;
  justify-items: space-between;
  padding: 12px 16px;
  position: relative;

  &:focus-within {
    outline: 2px solid #4374CB;
  }
  &:hover {
    color: ${COLORS.black};
  }
`

const CustomSelect = styled.select`
  inset: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
`

export default Select;
