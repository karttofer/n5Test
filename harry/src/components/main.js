// Dependencies
import React from 'react';

// Components
import CardComponent from './CardComponent';

// Hooks
import { useRequest } from '../hooks/useRequest';

const App = ({ i18 }) => {
  const [isLoading, response] = useRequest({ type: 'students' });
  return (
    <div>
      <h1>{i18?.welcome.titleH}</h1>
      {isLoading === false
        ? response.map((info) => (
            <CardComponent
              key={info.name}
              buttonText={i18?.button.text}
              name={info.name}
              src={info.image}
            />
          ))
        : null}
    </div>
  );
};

export default App;
