import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NaxaMapperProjects = () => {
  const [data, setData] = useState(null);
  const fetchUsers = async () => {
    const response = await axios.get('https://naxamapper.com/api/core/project-public/?ordering=-created_date&page=1');
    // const { results } = response;
    const imgae = response.data.results[0].base_map_id[0].photo;
    setData(imgae);
    console.log('data fetched', response.data.results[0].base_map_id[0].photo);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div style={{ justifyContent: 'center' }}>
        <h1>Naxa Mapper png image.</h1>
        <img src={data} alt="" />
      </div>
    </>
  );
};
export default NaxaMapperProjects;
