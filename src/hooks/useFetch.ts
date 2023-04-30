import { useEffect, useState } from "react";
import { getDataToShow } from "../service";

function useFetch<T = unknown>(
  url: string
): { data: T|null; loading: boolean; error: boolean } {
  const [data, setData] = useState<T|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataToShow(url)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
