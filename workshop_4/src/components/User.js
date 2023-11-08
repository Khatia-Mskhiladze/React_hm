import React from 'react'

export const User = ({data}) => {
    console.log(data);
    return (
        <div className='userDiv'>
            <h1 className='userDivText1'>{data.id}</h1><br/>
            <h2 className='userDivText2'>{data.title}</h2><br/>
            <h3 className='userDivText3'>{data.body}</h3>
        </div>
    )
}
