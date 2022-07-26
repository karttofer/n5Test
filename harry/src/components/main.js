// Dependencies
import React from 'react';

// Components
import CardComponent from './CardComponent';

// Hooks
import { useRequest } from '../hooks/useRequest';

// Styled
import { Main } from './Library';

const App = ({ i18 }) => {
  const [isLoading, response] = useRequest({ type: 'students' });
  return (
    <Main>
      <Main.H1>{i18?.welcome.titleH}</Main.H1>
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
    </Main>
  );
};

export default App;
