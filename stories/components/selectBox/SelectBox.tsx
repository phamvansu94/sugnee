import React, { useState } from 'react';
import { SelectBoxProps } from '../../constants/propTypes';
import { SelectBoxStyled } from './SelectBoxStyled';

export const SelectBox = ({ data, onChange }: SelectBoxProps) => {
  return (
    <SelectBoxStyled onChange={onChange}>
      {data.map((item: any, index: number) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </SelectBoxStyled>
  );
};
