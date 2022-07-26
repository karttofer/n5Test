// Dependenceis
import React from 'react';

// Styled Components
import { Card } from './Library';

// Assets
import noImg from '../assets/img/no-image.png';

const CardComponent = ({ name, src }) => {
  return (
    <Card className="card">
      <Card.Img src={src ? src : noImg} />
      <Card.Title>{name}</Card.Title>
    </Card>
  );
};

export default CardComponent;
