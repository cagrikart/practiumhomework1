import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetData({userId}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const combinedData = {
        users: userResponse.data,
        posts: postResponse.data
      };
      setData(combinedData);
    };
    fetchData();
  }, [userId]);

  return (
    <div>
      <pre>{JSON.stringify(data, null,3)}</pre>
    </div>
  );
}

export default GetData;
