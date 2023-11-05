import React from 'react'

export const User = ({data}) => {
  return (
    <div className='userDiv'>
        <h1>{data.name.first} {data.name.last}</h1>
        <img src={data.picture.large} alt="userPhoto"/>
    </div>

  );
}

