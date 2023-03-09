import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching data is not successfuly");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
  return { users, isLoading, error, setUsers };
};

export default useFetch;
