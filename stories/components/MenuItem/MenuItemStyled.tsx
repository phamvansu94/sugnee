import styled from 'styled-components';

type props = {
  active: boolean;
};
const MenuItemStyled = styled.div<props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  &:hover {
    background: #66d8e8;
  }
  ${(props) => props.active && `background: #66d8e8;`}
`;
export { MenuItemStyled };
