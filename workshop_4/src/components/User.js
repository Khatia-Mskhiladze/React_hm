import React from 'react'

export const User = ({data}) => {
    console.log(data);
    return (
        <div className='userDiv'>
            <h1>{data.id}</h1>
            <h2>{data.title}</h2>
            <h3>{data.body}</h3>
        </div>
    )
}
