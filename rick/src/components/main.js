// Dependencies
import React from 'react';

// Components
import CardComponent from './CardComponent';

// Hooks
import { useRequest } from '../hooks/useRequest';

const App = ({ i18 }) => {
  const [isLoading, response] = useRequest({ type: '' });
  return (
    <div>
      <h1>{i18.welcome.titleR}</h1>
      {isLoading === false
        ? response.results.map((info) => (
            <CardComponent
              key={info.name}
              buttonText={i18.button.text}
              name={info.name}
              src={info.image}
            />
          ))
        : null}
    </div>
  );
};

export default App;
