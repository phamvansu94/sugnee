import styled from 'styled-components';

type props = {
  hastex?: boolean;
};
export const MenuStyled = styled.div<props>`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.hastex
      ? `width: 200px;
        height: 960px;
        `
      : `width: 80px;
        height: 960px;
        `};
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
