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

export const Main = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  height: fit-content;
  border: 1px solid black;
  border-style: dotted;
`;

export const H1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
`;

Card.Title = CardTitle;
Card.Img = CardImg;

Main.H1 = H1;
