import styled from 'styled-components';

type props = {
  active: boolean;
  hastex: boolean;
};
const MenuItemStyled = styled.div<props>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  &:hover {
    background: #66d8e8;
  }
  ${(props) => props.active && `background: #66d8e8;`}

  ${(props) => (!props.hastex ? `justify-content: center ; max-width: 80px;` : ` padding-left: 20px;`)}
`;
const Text = styled.label`
     margin: 10px;}
`;
export { MenuItemStyled, Text };
