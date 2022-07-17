// Dependenceis
import React from 'react';

// Styled Components
import { HImg,HCard ,HTitle} from './Library';

// Assets
import noImg from '../assets/img/no-image.png'

const CardComponent = ({name, src}) => {
  return (
    <HCard>
      <HImg src={src ? src :noImg} />
      <HTitle>{name}</HTitle>
    </HCard>
  );
};

export default CardComponent;
