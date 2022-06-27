import styled from 'styled-components';

export const SelectBoxStyled = styled.select`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 2em 0.5em 1em;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #dadada;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
  font-size: 16px;
  & option {
    padding: 4px;
  }
`;
