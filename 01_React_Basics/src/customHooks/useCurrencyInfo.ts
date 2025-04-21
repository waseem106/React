import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {


  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const currDate = new Date();
      const formateDate = currDate.toLocaleDateString("en-CA");
      const apiUri = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formateDate}/v1/currencies/${currency}.json`;
      try {
        let response = await fetch(apiUri);
        response = await response.json();
        setData(response);
        
      } catch (error) {
        console.log("Error while fetchig currency information ");
      }
    };
    fetchData();
  }, [currency]);
  
  // console.log("data",data)
  return data;
}

export default useCurrencyInfo;
