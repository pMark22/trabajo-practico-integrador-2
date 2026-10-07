import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options = {}) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url, {
        ...options,
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        const error = new Error("Ocurrio un error");
        error.status = response.status;
        error.data = result;
        throw error;
      }

      setData(result);
      return result;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};
