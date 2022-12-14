import { useState } from "react";

const useApi = (apiFunc: () => any) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunc(...args)
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false); 
    setData(response.data as any);
  };

  return { data, error, loading, request }
};

export default useApi;
