import { useState, useEffect } from 'react';

export const useCustomHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Custom logic here
  }, []);

  return data;
}; 