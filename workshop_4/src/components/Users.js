import React, { useState, useEffect } from 'react';
import { User } from './User';
import { ScaleLoader } from 'react-spinners';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("error");
    })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, [])

  if (error) {
    return <div>
      <h1>Something's wrong</h1>
    </div>
  }
  return (
    <div className='usersContainer'>
      {
        isLoading && <ScaleLoader />
      }
      {users.slice(0, 5).map((user) => {
        <User data={user} key={user.id} />
      })}

    </div>
  )
}
export default Users;