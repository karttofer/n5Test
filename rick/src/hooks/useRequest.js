import { useEffect, useState } from 'react';

export const useRequest = ({ type }) => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${type}`)
      .then((e) => e.json())
      .then((response) => {
        setResponse(response);
        setIsloading(false);
      });
  }, []);

  return [isLoading, response];
};
