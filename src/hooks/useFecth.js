import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const [paginationOptions, setPaginationOptions] = useState({
    skip: 0,
    limit: 15,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const options = {
        method: 'GET',
        params: paginationOptions,
      };
      const { data = [] } = await axios(url, options);
      const { users } = data;
      setUsers(users);
    };

    fetchUsers();
  }, [paginationOptions, url]);

  return { users, setPaginationOptions, paginationOptions };
};

export default useFetch;
