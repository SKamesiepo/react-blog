import {useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const abortCont = new AbortController();


    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
      .then(res => {
        if (!res.ok)
        {
          throw Error('Was not able to fetch data for that resource');
        }

        return res.json();
      })

      .then((data) => {
        if(err.name==='AbortError') {
          console.log('Fetch has been aborted');
        } else {
          setError(err.message);
          setIsPending(false);
        }
      })
    }, 5);

    return () => abortCont.abort();

  }, [url]);

  return {data, isPending, error}
}