import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  
  const token = localStorage.getItem('Token');

  const getdata = () => {
    fetch('http://localhost:8000/notice', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  };

  useEffect(() => {
    getdata();
  }, []); 

  if(!token){
     <h1>Login first</h1>
  }

  return (
    <div>
  <h1>Homepage</h1>
  {data.map((item) => (
    <div key={item._id}>
      <p>{item.title}</p>
      <p>{item.body}</p>
      <p>{item.category}</p>
      <p>{item.date}</p>
      {}
    </div>
    ))}
  </div>
  );
};

export default Home;