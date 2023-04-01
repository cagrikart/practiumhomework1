import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserCard({userId}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const combinedData = {
        ...userResponse.data,
        posts: postResponse.data
      };
      setData(combinedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null,2)}</pre>
    </div>
  );
}

export default UserCard;
