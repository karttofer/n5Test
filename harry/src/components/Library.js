import styled from 'styled-components';

export const Card = styled.div`
  width: 186px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 0.6em;
`;

export const CardImg = styled.img`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

Card.Title = CardTitle;
Card.Img = CardImg;
