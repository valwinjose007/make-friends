import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    console.log("request coming....");
    setError(false);
    setLoading(true);
    const response = await apiFunc(...args);
    //console.log("response....", response);
    setLoading(false);

    setError(!response.ok);

    if (response.ok) {
      setData(response.data);
    }

    return response;
  };

  return { data, error, loading, request };
};
