import styled from 'styled-components';

type MenuProps = {
  hasText?: boolean;
};
export const MenuStyled = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.25);
  height: 960px;
  ${(props) =>props.hasText ? `width: 200px;`: `width: 80px;`};
`;

const sizeTitle = ` margin: 10px 0px;
height: 60px;
width: 100%;
`;

export const TitleText = styled.h1`
  font-size: 36px;
  color: #757575;
  text-align: center;
  ${sizeTitle}
`;
export const TitleImg = styled.img`
  ${sizeTitle}
`;
