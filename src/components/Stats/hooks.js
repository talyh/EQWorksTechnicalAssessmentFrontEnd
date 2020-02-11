import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import routes from "../../router/routes";

export const useStatsData = (url, transformationFunction) => {
  const [statsData, setStatsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  // load data from url, setting the state if successful fetch, or redirecting to error page if fail
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(url);
        const data = await result.json();
        const transformed = transformationFunction(data);
        setStatsData(transformed);
      } catch (error) {
        history.push(routes.error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [history, transformationFunction, url]);

  return { statsData, isLoading };
};
