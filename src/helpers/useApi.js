import { useState, useEffect } from "react";
import axios from "axios";

function useApi(urls = "", token = "") {
  const [requests, setRequests] = useState({
    baseURL: "https://be-lectronic.herokuapp.com/api/v1/",
    headers: {
      "Content-Type": "application/json",
      access_token: `Bearer ${token}`
    }
  });

  const setConfig = () => {
    setRequests({
      ...requests,
      headers: {
        "Content-Type": "application/json",
        access_token: `Bearer ${token}`
      }
    });
  };

  useEffect(() => {
    setConfig();
  }, []);

  return { requests: axios.create(requests) };
}

export default useApi;
