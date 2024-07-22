import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = 'a0cf33d7ccmshe932d1af1ae518ap1359dcjsn0b0763b70ba2';

const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "x-rapidapi-key": rapidApiKey,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(false);
    fetchData();
  };

  return { data, error, isLoading, refetch };
};

export default useFetch;